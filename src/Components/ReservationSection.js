import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik } from "formik";
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import * as Yup from "yup";

const ReservationSection = () => {
  const [time, setTime] = useState([]);
  const [date, setDate] = useState(new Date());
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("None");

  const guestsOption = [
    { value: "1", label: "1 Person" },
    { value: "2", label: "2 Person" },
    { value: "3", label: "3 Person" },
    { value: "4", label: "4 Person" },
    { value: "5", label: "5 Person" },
  ];

  const occasionOption = [
    { value: "None", label: "None" },
    { value: "birthday", label: "Birthday" },
    { value: "anniversary", label: "anniversary" },
  ];

  const dateString = date.toDateString();

  const [booklist, setBooklist] = useState([
    `${dateString} - 1700`,
    `${dateString} - 1800`,
  ]);

  const timeOption = [
    { value: `${dateString} - 1700`, label: "17:00" },
    { value: `${dateString} - 1800`, label: "18:00" },
    { value: `${dateString} - 1900`, label: "19:00" },
    { value: `${dateString} - 2000`, label: "20:00" },
    { value: `${dateString} - 2100`, label: "21:00" },
    { value: `${dateString} - 2200`, label: "22:00" },
  ];

  const formik = useFormik({
    initialValues: {
      name: "",
      date: date,
      time: "",
      guests: "",
      occasion: "",
    },

    onSubmit: (values, { resetForm }) => {
      values.date = date.toDateString();
      values.guests = guests;
      values.occasion = occasion;
      values.time = time;
      setBooklist((booklist) => [...booklist, time]);
      alert(JSON.stringify(values, null, 2));
      resetForm({ values: "" });
    },

    validationSchema: Yup.object().shape({
      name: Yup.string().required("Required"),
    }),
  });

  return (
    <div id="Reservations-Section" class="px-80 mt-20 py-32 bg-tgreen ">
      <div class="flex justify-center">
        <h1 class="text-5xl text-tyellow">Make a reservation</h1>
      </div>
      <div class="flex justify-center mt-8">
        <h1 class="text-2xl text-tpink">
          Select your details and we’ll try get the best seats for you
        </h1>
      </div>

      <form class="grid grid-cols-6 mt-8" onSubmit={formik.handleSubmit}>
        <div class="mt-3 px-3 col-span-3">
          <FormControl isRequired>
            <FormLabel fontSize="xs" as="b" class="block mb-2" htmlFor="name">
              NAME
            </FormLabel>
            <Input
              backgroundColor="white"
              size="lg"
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </FormControl>
        </div>
        <div class="col-span-3"></div>

        <div class="mt-8 px-3 col-span-2">
          <FormControl>
            <FormLabel fontSize="xs" as="b" class="block mb-2" htmlFor="guests">
              NUMBER OF GUEST
            </FormLabel>
            <Select
              as="Select"
              backgroundColor="white"
              size="lg"
              class="block w-full rounded"
              id="guests"
              name="guests"
              onChange={() =>
                setGuests(document.getElementById("guests").value)
              }
            >
              {guestsOption.map((item) => (
                <option value={item.value} label={item.label}>
                  {item.value}
                </option>
              ))}
            </Select>
          </FormControl>
        </div>

        <div class="mt-8 px-3 col-span-2">
          <FormControl>
            <FormLabel
              fontSize="xs"
              as="b"
              class="block mb-2"
              htmlFor="occasion"
            >
              OCCASION
            </FormLabel>
            <Select
              as="Select"
              backgroundColor="white"
              size="lg"
              class="w-full rounded"
              id="occasion"
              name="occasion"
              onChange={() =>
                setOccasion(document.getElementById("occasion").value)
              }
            >
              {occasionOption.map((item) => (
                <option value={item.value} label={item.label}>
                  {item.value}
                </option>
              ))}
            </Select>
          </FormControl>
        </div>
        <div class="mt-3 px-3 col-span-2"></div>

        <div class="mt-8 px-3 col-span-2">
          <FormControl>
            <FormLabel fontSize="xs" as="b" class="block mb-2" htmlFor="date">
              DATE
            </FormLabel>
            <DatePicker selected={date} onChange={(date) => setDate(date)} />
          </FormControl>
        </div>
        <div class="mt-3 px-3 col-span-4"></div>

        <div class="mt-8 px-3 col-span-2">
          <FormControl isRequired>
            <FormLabel fontSize="xs" as="b" class="block mb-2" htmlFor="time">
              TIME
            </FormLabel>
            <Select
              as="Select"
              backgroundColor="white"
              size="lg"
              class="w-full rounded"
              id="time"
              name="time"
              placeholder="Time"
              onChange={() => setTime(document.getElementById("time").value)}
            >
              {timeOption.map((item) =>
                booklist.includes(item.value) ? (
                  <option value={item.value} label={item.label} disabled>
                    {item.value}
                  </option>
                ) : (
                  <option value={item.value} label={item.label}>
                    {item.value}
                  </option>
                )
              )}
            </Select>
          </FormControl>
        </div>
        <div class="mt-3 px-3 col-span-4"></div>

        <div class="col-span-6 flex justify-center mt-8">
          <button
            class="bg-tyellow hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full mt-4"
            type="submit"
          >
            Reserve Now
          </button>
        </div>
      </form>
    </div>
  );
};
export default ReservationSection;
