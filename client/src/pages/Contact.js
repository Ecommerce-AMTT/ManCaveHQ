import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import { Card, Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Contact() {
  const { t } = useSelector((state) => {
    // console.log("Contact.state ", state);
    return state.translate;
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    // if statement to validate email
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("please enter a valid email");
      } else {
        setErrorMessage("");
      }
    }

    // if statement to check name input field
    if (!e.target.value.length) {
      setErrorMessage(`${e.target.name} is required.`);

      if (e.target.value.length) {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (

    <Container>
      <h2 data-testid='h1tag' className='top-title'>
        {t("Contact:contactForm")}
      </h2>
      <hr></hr>
      
      <Container className="d-flex justify-content-center ">      
      <form id='contact-form'>
        <div className='mt-5'>
          <label style={{color: "rgb(211, 203, 203)"}} htmlFor='name'>{t("Contact:name")}:</label>
          <input
            className='form-control'
            type='text'
            name='name'
            placeholder={t("Contact:your_name")}
            onBlur={handleChange}
          />
        </div>

        <div className='mt-5'>
          <label style={{color: "rgb(211, 203, 203)"}} htmlFor='email'>{t("Contact:email")}:</label>
          <input
            className='form-control'
            type='email'
            name='email'
            placeholder={t("Contact:your_email")}
            onBlur={handleChange}
          />
        </div>
        <div className='mt-5'>
          <label style={{color: "rgb(211, 203, 203)"}} htmlFor='message'>{t("Contact:message")}:</label>
          <textarea
            className='form-control'
            name='message'
            placeholder={t("Contact:your_questions")}
            onBlur={handleChange}
            rows='7'
          />
        </div>
        {errorMessage && (
          <div>
            <p className='error-text'>{errorMessage}</p>
          </div>
        )}

        {/* this div contains the button to submit the contact information form  */}
        <div className='mt-5 mb-5'>
          <Button
            data-testid='button'
            className='button-85'
            type='submit'
            onSubmit={handleSubmit}
          >
            {t("Contact:submit")}
          </Button>
        </div>
      </form>
      </Container>
    </Container>
  );
}
