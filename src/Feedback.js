import { Form, Field, FormikProvider } from "formik";

export default function Feedback({ formik, onPrevClick }) {
  return (
    <FormikProvider value={formik}>
      <h1 className="text-blue-600 mt-10">FEEDBACK</h1>
      <div className="my-2">{formik.values.name}</div>
      <Form>
        <div id="my-radio-group">what is your opinion?</div>
        <div role="group" aria-labelledby="my-radio-group">
          <label className="mr-3">
            <Field
              className="mr-1"
              type="radio"
              name="picked"
              value="unhappy"
              checked={formik.values.picked === "unhappy"}
            />
            unhappy
          </label>
          <label className="mr-3">
            <Field
              className="mr-1"
              type="radio"
              name="picked"
              value="could be better"
              checked={formik.values.picked === "could be better"}
            />
            could be better
          </label>
          <label className="mr-3">
            <Field
              className="mr-1"
              type="radio"
              name="picked"
              value="satisfied"
              checked={formik.values.picked === "satisfied"}
            />
            satisfied
          </label>
          <label className="mr-3">
            <Field
              className="mr-1"
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
            className="mt-3 mb-4"
            as="textarea"
            name="textarea"
            placeholder="Write more about..."
          />
        </div>

        <button
          className="mr-4 rounded  w-1/6 bg-orange-200 shadow-[0px_3px_8px_rgba(0,0,0,0.24)]"
          type="button"
          onClick={onPrevClick}
        >
          Prev
        </button>
        <button
          className="mr-4 rounded  w-1/6 bg-amber-300 shadow-[0px_3px_8px_rgba(0,0,0,0.24)]"
          type="submit"
        >
          Submit
        </button>
      </Form>
    </FormikProvider>
  );
}
