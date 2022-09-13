import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup() {
  const { t } = useSelector((state) => {
    // console.log("Contact.state ", state);
    return state.translate;
  });

  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className='container my-1'>
      <Link to='/login'>← Go to Login</Link>

      <h2>{t("Signup:Signup")}</h2>
      <form onSubmit={handleFormSubmit}>
        <div className='flex-row space-between my-2'>
          <label htmlFor='firstName'>{t("Signup:firstName")}:</label>
          <input
            placeholder={t("Signup:first")}
            name='firstName'
            type='firstName'
            id='firstName'
            onChange={handleChange}
          />
        </div>
        <div className='flex-row space-between my-2'>
          <label htmlFor='lastName'>{t("Signup:lastName")}:</label>
          <input
            placeholder={t("Signup:last")}
            name='lastName'
            type='lastName'
            id='lastName'
            onChange={handleChange}
          />
        </div>
        <div className='flex-row space-between my-2'>
          <label htmlFor='email'>{t("Signup:email")}:</label>
          <input
            placeholder='youremail@test.com'
            name='email'
            type='email'
            id='email'
            onChange={handleChange}
          />
        </div>
        <div className='flex-row space-between my-2'>
          <label htmlFor='pwd'>{t("Signup:password")}:</label>
          <input
            placeholder='******'
            name='password'
            type='password'
            id='pwd'
            onChange={handleChange}
          />
        </div>
        <div className='flex-row flex-end'>
          <button type='submit'>{t("Signup:submit")}</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
