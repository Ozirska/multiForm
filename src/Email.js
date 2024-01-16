import React from "react";
import { Form, useField, FormikProvider } from "formik";
import * as yup from "yup";

const CustomInput = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <p className="error">{meta.error}</p>}
    </>
  );
};

export default function Email({ formik, onNextFormClick }) {
  return (
    <FormikProvider value={formik}>
      <Form>
        <CustomInput type="text" name="name" placeholder="user name..." />
        <CustomInput type="text" name="email" placeholder="email..." />
        <button
          onClick={
            !formik.errors.name && !formik.errors.email
              ? onNextFormClick
              : () => {}
          }
        >
          Next
        </button>
      </Form>
    </FormikProvider>
  );
}
