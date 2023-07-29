import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";	
import { validation } from "./validation.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toastify.js";
import "./SignUp_LogIn.css";

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validation(formValues,"signUp"));
  }, [formValues,touched]);

  const changeHandler = (e) => {
    if (e.target.name === "isAccepted") {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.checked,
      });
    } else {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    }
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
      notify("You Signed Up successfully", "success");
    } else {
      notify("Invalid Data!", "error");
      setTouched({
        userName: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler} className="formContainer">
        <h2 className="header">Sign Up</h2>
        <div className="formField">
          <label>User Name</label>
          <input
            className={(errors.userName && touched.userName)?"unCompleted":"formInput"}
            type="text"
            name="userName"
            value={formValues.userName}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.userName && touched.userName && (
            <span>{errors.userName}</span>
          )}
        </div>
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
        <div className="formField">
          <label>Confirm Password</label>
          <input
           className={(errors.confirmPassword && touched.confirmPassword)?"unCompleted":"formInput"}
            type="password"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div className="formField">
					<div className="checkBoxContainer">
          <label htmlFor="isAccepted">I Accept term of privacy policy</label>
          <input
            id="isAccepted"
            type="checkbox"
            name="isAccepted"
            value={formValues.isAccepted}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
					</div>
          {errors.isAccepted && touched.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>
        <div className="formButtons">
					<Link className="link" to="/form/login">Log In</Link>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
