import React, { useState } from "react";
import {validateEmail} from '../utils/helpers'
import { Card, Container, Button } from "react-bootstrap";

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
  return (
    <Container >
      <h2 data-testid="h1tag" className="top-title">
        Contact Form
      </h2>
      <hr></hr>
      <Container className="d-flex justify-content-center ">
      <form id="contact-form">
        <div className="mt-5">
          <label style={{color: "rgb(211, 203, 203)"}} htmlFor="name">Name:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Your Name"
            onBlur={handleChange}
          />
        </div>
        <div className="mt-5">
          <label style={{color: "rgb(211, 203, 203)"}} htmlFor="email">Email Address:</label>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Your Email"
            onBlur={handleChange}
          />
        </div>
        <div className="mt-5">
          <label style={{color: "rgb(211, 203, 203)"}} htmlFor="message">Message:</label>
          <textarea
            className="form-control"
            name="message"
            placeholder="Do you have any questions for us?"
            onBlur={handleChange}
            rows="7"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

          {/* this div contains the button to submit the contact information form  */}
        <div className="mt-5 mb-5">
          <Button
            data-testid="button"
            className="button-85"
            type="submit"
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
