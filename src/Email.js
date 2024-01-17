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
      <Form className="mt-10">
        <CustomInput type="text" name="name" placeholder="user name..." />
        <CustomInput type="text" name="email" placeholder="email..." />
        <button
          className="mr-4 rounded  w-1/6 bg-orange-200 shadow-[0px_3px_8px_rgba(0,0,0,0.24)]"
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
