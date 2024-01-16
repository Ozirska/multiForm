// import React, { useState } from "react";
// import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
// import * as yup from "yup";

// const validationSchema = yup.object().shape({
//   email: yup.string().email("Invalid email").required("Email is required"),
// });

// export default function Email() {
//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       initialValues: {
//         email: "",
//       },
//       validationSchema,
//     });

//   const onSubmit = (values, action) => {
//     console.log(values);
//   };

//   return (
//     <form onSubmit={handleSubmit} autoComplete="off">
//       <input
//         value={values.email}
//         onChange={handleChange}
//         onBlur={handleBlur}
//         id="email"
//         type="email"
//         placeholder="email..."
//         className={errors.email && touched.email ? "input-error" : ""}
//       />
//       {errors.email && touched.email && <p className="error">{errors.email}</p>}
//     <button >Next</button>
//     </form>
//   );
// }

//////////////////////
/////////////////////////
///////////////////////

import React from "react";
import { Formik, Form, Field, useField } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

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

export default function Email({ onEmailSubmit, email, name }) {
  return (
    <Formik
      initialValues={{ email: email || "", name: name || "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => onEmailSubmit(values.email, values.name)}
    >
      {(props) => (
        <Form>
          <CustomInput type="text" name="name" placeholder="user name..." />
          <CustomInput type="text" name="email" placeholder="email..." />
          <button type="submit">Next</button>
        </Form>
      )}
    </Formik>
  );
}
