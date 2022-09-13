
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

function Login() {
  const { t } = useSelector((state) => {
    // console.log("Contact.state ", state);
    return state.translate;
  });

  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);


//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const mutationResponse = await login({
//         variables: { email: formState.email, password: formState.password },
//       });
//       const token = mutationResponse.data.login.token;
//       Auth.login(token);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };


 return (
    <div className='container my-1'>
      <Link to='/signup'>← Go to Signup</Link>

      <h2>{t("Login:login")}</h2>
      <form onSubmit={handleFormSubmit}>
        <div className='flex-row space-between my-2'>
          <label htmlFor='email'>{t("Login:email")}:</label>
          <input
            placeholder='youremail@test.com'
            name='email'
            type='email'
            id='email'
            onChange={handleChange}
          />
        </div>
        <div className='flex-row space-between my-2'>
          <label htmlFor='pwd'>{t("Login:password")}:</label>
          <input
            placeholder='******'
            name='password'
            type='password'
            id='pwd'
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className='error-text'>{t("Login:incorrect_credentials")}</p>
          </div>
        ) : null}
        <div className='flex-row flex-end'>
          <button type='submit'>{t("Login:submit")}</button>
        </div>
      </form>
    </div>
  );
}

// export default Login;
