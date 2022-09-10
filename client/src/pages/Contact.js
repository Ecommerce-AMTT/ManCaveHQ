import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import { Card, Container, Button } from "react-bootstrap";
import { initReactI18next } from "react-i18next";

export default function Contact() {
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

  const onChangeLang = () => {
    console.log("onChange lang called");
  };

  return (
    <section className='container'>
      <h2 data-testid='h1tag' className='top-title'>
        Contact Form
      </h2>
      <select name='language' onChange={onChangeLang}>
        <option value='en'></option>
        <option value='fr'></option>
      </select>
      <hr></hr>
      <form className='justify-content-center' id='contact-form'>
        <div className='mt-5'>
          <label htmlFor='name'>Name:</label>
          <input
            className='form-control'
            type='text'
            name='name'
            placeholder='Your Name'
            onBlur={handleChange}
          />
        </div>
        <div className='mt-5'>
          <label htmlFor='email'>Email Address:</label>
          <input
            className='form-control'
            type='email'
            name='email'
            placeholder='Your Email'
            onBlur={handleChange}
          />
        </div>
        <div className='mt-5'>
          <label htmlFor='message'>Message:</label>
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
    </section>
  );
}
