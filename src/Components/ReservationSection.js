import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik } from "formik";
import { FormControl, FormLabel } from "@chakra-ui/react";
import * as Yup from "yup";
import TextField from "./TextField";
import SelectField from "./SelectField";

const ReservationSection = () => {
  const [date, setDate] = useState(new Date());

  const guestsOption = [
    { value: "", label: "Party Size" },
    { value: "1", label: "1 Person" },
    { value: "2", label: "2 Person" },
    { value: "3", label: "3 Person" },
    { value: "4", label: "4 Person" },
    { value: "5", label: "5 Person" },
  ];

  const occasionOption = [
    { value: "", label: "No Occassion" },
    { value: "birthday", label: "Birthday" },
    { value: "anniversary", label: "anniversary" },
  ];

  const dateString = date.toDateString();

  const [booklist, setBooklist] = useState([
    `${dateString} - 1700`,
    `${dateString} - 1800`,
  ]);

  const timeOption = [
    { value: "", label: "Time" },
    { value: `${dateString} - 1700`, label: "17:00" },
    { value: `${dateString} - 1800`, label: "18:00" },
    { value: `${dateString} - 1900`, label: "19:00" },
    { value: `${dateString} - 2000`, label: "20:00" },
    { value: `${dateString} - 2100`, label: "21:00" },
    { value: `${dateString} - 2200`, label: "22:00" },
  ];

  return (
    <Formik
      initialValues={{
        name: "",
        guests: "",
        occasion: "",
        date: date,
        time: "",
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Required"),
        guests: Yup.string().required("Required"),
        time: Yup.string().required("Required"),
      })}
      onSubmit={(values, actions) => {
        values.date = date.toDateString();
        setBooklist((booklist) => [...booklist, values.time]);
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }}
    >
      {(formik) => (
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
              <TextField label="NAME" name="name" type="text" />
            </div>
            <div class="col-span-3"></div>

            <div class="mt-8 px-3 col-span-2">
              <SelectField
                label="NUMBER OF GUEST"
                name="guests"
                options={guestsOption}
                compare={[]}
              />
            </div>

            <div class="mt-8 px-3 col-span-2">
              <SelectField
                label="OCCASION"
                name="occasion"
                options={occasionOption}
                compare={[]}
              />
            </div>
            <div class="mt-3 px-3 col-span-2"></div>

            <div class="mt-8 px-3 col-span-2">
              <FormControl>
                <FormLabel
                  fontSize="xs"
                  as="b"
                  class="block mb-2"
                  htmlFor="date"
                >
                  DATE
                </FormLabel>
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                />
              </FormControl>
            </div>
            <div class="mt-3 px-3 col-span-4"></div>

            <div class="mt-8 px-3 col-span-2">
              <SelectField
                label="TIME"
                name="time"
                options={timeOption}
                compare={booklist}
              />
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
      )}
    </Formik>
  );
};
export default ReservationSection;
