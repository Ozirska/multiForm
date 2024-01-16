import React, { useState, useRef } from "react";
import { Formik, Form, Field, useField } from "formik";
import emailjs from "@emailjs/browser";

export default function Feedback({
  email,
  onPrevClick,
  name,
  picked,
  textarea,
  handleChange,
}) {
  const form = useRef();

  const sendEmail = (values) => {
    let data = {
      picked: values.picked,
      textarea: values.textarea,
      email,
      name,
    };
    console.log(form.current);

    emailjs
      .sendForm(
        "service_mmvo0dg",
        "template_1cpkkd8",
        form.current,
        "NVme4gBt6AEpzhi4s",
        data
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleFormChange = (values) => {
    // setPicked(values.picked);
    // setTextarea(values.textarea);
    console.log("work handleFormChange");
  };

  return (
    <>
      <h1>FEEDBACK</h1>
      <div>{email}</div>
      <Formik
        initialValues={{
          picked: picked || "",
          textarea: textarea || "",
        }}
        onSubmit={sendEmail}
        enableReinitialize={true}
        onChange={handleChange}
      >
        {(values) => (
          <Form ref={form}>
            <div id="my-radio-group">what is your opinion?</div>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field
                  type="radio"
                  name="picked"
                  value="unhappy"
                  checked={values.picked === "unhappy"}
                />
                unhappy
              </label>
              <label>
                <Field
                  type="radio"
                  name="picked"
                  value="could be better"
                  checked={values.picked === "could be better"}
                />
                could be better
              </label>
              <label>
                <Field
                  type="radio"
                  name="picked"
                  value="satisfied"
                  checked={values.picked === "satisfied"}
                />
                satisfied
              </label>
              <label>
                <Field
                  type="radio"
                  name="picked"
                  value="very statisfied"
                  checked={values.picked === "very statisfied"}
                />
                very statisfied
              </label>
            </div>
            <div>
              <Field
                as="textarea"
                name="textarea"
                placeholder="Write more about..."
              />
            </div>

            <button type="button" onClick={onPrevClick}>
              Prev
            </button>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
