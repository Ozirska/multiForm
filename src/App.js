import "./App.css";
import React, { useState, useRef } from "react";
import Email from "./Email";
import Feedback from "./Feedback";

function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [picked, setPicked] = useState("");
  const [textarea, setTextarea] = useState("");

  const handleEmailSubmit = (submittedEmail, submittedName) => {
    setEmail(submittedEmail);
    setUserName(submittedName);
    setIsSubmit(true);
  };
  const handleChange = (pic, area) => {
    setPicked(pic);
    setTextarea(area);
  };

  const handlePrevClick = () => {
    setIsSubmit(false);
  };
  return (
    <div className="App">
      <>
        {!isSubmit ? (
          <Email
            onEmailSubmit={handleEmailSubmit}
            email={email}
            name={userName}
          />
        ) : (
          <Feedback
            picked={picked}
            textarea={textarea}
            name={userName}
            email={email}
            handleChange={handleChange}
            onPrevClick={handlePrevClick}
          />
        )}
      </>
    </div>
  );
}

export default App;
