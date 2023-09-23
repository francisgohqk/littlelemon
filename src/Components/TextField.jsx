import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { Input } from "@chakra-ui/input";
import { Field, useField } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      <FormLabel fontSize="xs" as="b" class="block mb-2" htmlFor="name">
        {label}
      </FormLabel>
      <Field
        as={Input}
        backgroundColor="white"
        size="lg"
        {...field}
        {...props}
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default TextField;
