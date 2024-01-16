import { useState } from "react";
import { useFormik } from "formik";
import Email from "./Email";
import Feedback from "./Feedback";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

export default function App() {
  const [isSubmitForm, setIsSubmitForm] = useState(false);

  const handleNextForm = () => {
    setIsSubmitForm(true);
  };

  const handleOnPrevClick = () => {
    setIsSubmitForm(false);
  };

  const handleSubmit = (values) => {
    console.log(values);

    emailjs
      .send("service_mmvo0dg", "template_1cpkkd8", values, "NVme4gBt6AEpzhi4s")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const formik = useFormik({
    initialValues: {
      picked: "unhappy",
      email: "",
      name: "",
      textarea: "",
    },
    validateOnChange: true,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="App">
      <>
        {!isSubmitForm ? (
          <Email formik={formik} onNextFormClick={handleNextForm} />
        ) : (
          <Feedback formik={formik} onPrevClick={handleOnPrevClick} />
        )}
      </>
    </div>
  );
}
