import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import { Card, Container, Button } from "react-bootstrap";

export default function Contact({ t }) {
  console.log("Contact.js  t = ", t);
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
<<<<<<< HEAD
    <Container >
      <h2 data-testid="h1tag" className="top-title">
        Contact Form
      </h2>
      <hr></hr>
      <Container className="d-flex justify-content-center ">
      <form id="contact-form">
        <div className="mt-5">
          <label style={{color: "rgb(211, 203, 203)"}} htmlFor="name">Name:</label>
=======
    <section className='container'>
      <h2 data-testid='h1tag' className='top-title'>
        {t("contactForm")}
      </h2>
      <hr></hr>
      <form className='justify-content-center' id='contact-form'>
        <div className='mt-5'>
          <label htmlFor='name'>Name:</label>
>>>>>>> 8e62a2ed3bf803451ff65024d1927c0cc2c72d6e
          <input
            className='form-control'
            type='text'
            name='name'
            placeholder='Your Name'
            onBlur={handleChange}
          />
        </div>
<<<<<<< HEAD
        <div className="mt-5">
          <label style={{color: "rgb(211, 203, 203)"}} htmlFor="email">Email Address:</label>
=======
        <div className='mt-5'>
          <label htmlFor='email'>Email Address:</label>
>>>>>>> 8e62a2ed3bf803451ff65024d1927c0cc2c72d6e
          <input
            className='form-control'
            type='email'
            name='email'
            placeholder='Your Email'
            onBlur={handleChange}
          />
        </div>
<<<<<<< HEAD
        <div className="mt-5">
          <label style={{color: "rgb(211, 203, 203)"}} htmlFor="message">Message:</label>
=======
        <div className='mt-5'>
          <label htmlFor='message'>Message:</label>
>>>>>>> 8e62a2ed3bf803451ff65024d1927c0cc2c72d6e
          <textarea
            className='form-control'
            name='message'
            placeholder='Do you have any questions for us?'
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
            Submit
          </Button>
        </div>
      </form>
      </Container>
    </Container>
  );
}
