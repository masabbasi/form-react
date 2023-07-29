import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { validation } from "./validation.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toastify.js";
import "./SignUp_LogIn.css";

const LogIn = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validation(formValues,"logIn"));
  }, [formValues,touched]);

  const changeHandler = (e) => {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
  };

  const focusHandler = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

	const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      notify("You Loged In successfully", "success");
    } else {
      notify("Invalid Data!", "error");
      setTouched({
        email: true,
        password: true,
      });
    }
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler} className="formContainer">
        <h2 className="header">Log In</h2>
        <div className="formField">
          <label>Email</label>
          <input
            className={(errors.email && touched.email)?"unCompleted":"formInput"}
            type="email"
            name="email"
            value={formValues.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div className="formField">
          <label>Password</label>
          <input
            className={(errors.password && touched.password)?"unCompleted":"formInput"}
            type="password"
            name="password"
            value={formValues.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div className="formButtons">
				<Link className="link" to="/form-react/signup">Sign Up</Link>
          <button type="submit">Log In</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LogIn;
