import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";
import { useSelector } from "react-redux";

const SignupForm = () => {
  const { t } = useSelector((state) => {
    // console.log("Contact.state ", state);
    return state.translate;
  });

  // set initial form state
  const [userFormData, setUserFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      userName: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant='danger'
        >
          <p style={{marginTop : "10px"}}>{t("Signup:wrong_signup")}</p>
        </Alert>

        <Form.Group>
          <Form.Label htmlFor='userName'>{t("Signup:username")}</Form.Label>
          <Form.Control
            type='text'
            placeholder={t("Signup:your_username")}
            name='userName'
            onChange={handleInputChange}
            value={userFormData.userName}
            required
          />
          <Form.Control.Feedback type='invalid'>
            {t("Signup:username_required")}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label className='mt-2' htmlFor='email'>
            {t("Signup:email")}
          </Form.Label>
          <Form.Control
            type='email'
            placeholder={t("Signup:your_email")}
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>
            {t("Signup:email_required")}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label className='mt-2' htmlFor='password'>
            {t("Signup:password")}
          </Form.Label>
          <Form.Control
            type='password'
            placeholder={t("Signup:your_password")}
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={
            !(
              userFormData.userName &&
              userFormData.email &&
              userFormData.password
            )
          }
          type='submit'
          className='button-85 mt-3'
        >
          {t("Signup:submit")}
        </Button>
      </Form>
    </>
  );
};

export default SignupForm;
