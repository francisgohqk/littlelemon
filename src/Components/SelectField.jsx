import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { Field, useField } from "formik";

const SelectField = ({ label, options, compare, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      <FormLabel fontSize="xs" as="b" class="block mb-2" htmlFor="name">
        {label}
      </FormLabel>
      <Field
        as="select"
        {...field}
        {...props}
        backgroundColor="white"
        class="w-full"
      >
        {options.map((item) =>
          compare.includes(item.value) ? (
            <option value={item.value} label={item.label} disabled>
              {item.value}
            </option>
          ) : (
            <option value={item.value} label={item.label}>
              {item.value}
            </option>
          )
        )}
      </Field>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default SelectField;
