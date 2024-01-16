import React, { useState, useRef } from "react";
import { Form, Field, FormikProvider } from "formik";

export default function Feedback({ formik, onPrevClick }) {
  return (
    <FormikProvider value={formik}>
      <h1>FEEDBACK</h1>
      <div>{formik.values.email}</div>
      <Form>
        <div id="my-radio-group">what is your opinion?</div>
        <div role="group" aria-labelledby="my-radio-group">
          <label>
            <Field
              type="radio"
              name="picked"
              value="unhappy"
              checked={formik.values.picked === "unhappy"}
            />
            unhappy
          </label>
          <label>
            <Field
              type="radio"
              name="picked"
              value="could be better"
              checked={formik.values.picked === "could be better"}
            />
            could be better
          </label>
          <label>
            <Field
              type="radio"
              name="picked"
              value="satisfied"
              checked={formik.values.picked === "satisfied"}
            />
            satisfied
          </label>
          <label>
            <Field
              type="radio"
              name="picked"
              value="very statisfied"
              checked={formik.values.picked === "very statisfied"}
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
    </FormikProvider>
  );
}
