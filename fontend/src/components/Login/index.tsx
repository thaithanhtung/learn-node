import React from "react";
import { useState, useEffect } from "react";
// import "./App.css";
// import "./style.css";
import "./style.scss";
import img_email from "./img/email.png";
import img_password from "./img/password.png";
import { EntryType } from "perf_hooks";
import { error } from "console";
// import { error } from "console";

type FormErrorsType = {
  email: string;
  password: string;
};

const Login = () => {
  const initialValues = { email: "", password: "" };

  const initialValueError = { email: "", password: "" };

  const [formValues, setFormValues] = useState(initialValues);

  const [formErrors, setFormErrors] =
    useState<FormErrorsType>(initialValueError);

  const [formRequied, setFormRequied] = useState(false);

  // const [focused, setFocused] = useState(false);

  // const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log("e.target", e.target.name);

    var errorInput = validate(name, value);

    setFormErrors({ ...formErrors, [name]: errorInput });
  };
  console.log("handle formValue 2", formValues);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // setFocused(true);
    var errorInput1 = "";
    var errorInput = "";

    if (formValues.email === "") {
      errorInput1 = validate("email", formValues.email);
      setFormRequied(!formRequied);
      // console.log("handleSubmit errorInput ", errorInput);
    }
    if (formValues.password === "") {
      errorInput = validate("password", formValues.password);
      setFormRequied(!formRequied);

      // console.log("handleSubmit errorInput ", errorInput);
    }

    var allError = {
      email: errorInput1,
      password: errorInput,
    };
    setFormErrors({ ...formErrors, ...allError });

    // setIsSubmit(true);
  };
  console.log("....formErrors", formErrors);

  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //   }
  // }, [formErrors]);

  const validate = (name: string, value: string): string => {
    // console.log("values validate ->", values.email);
    // console.log("formValue ->", formValue);
    // const errors:s = "";
    // const regex = /\w+@[a-z]+[.][a-z]*/;
    var errors: string = "";

    const regex = /\w+@[a-z]+[.][a-z]*/;
    if (name === "email") {
      // errors = "Email required!";
      if (!value) {
        errors = "Email required!";
      } else if (!regex.test(value)) {
        errors = "This email is invalid!";
      }
    }
    if (name === "password") {
      if (!value) {
        errors = "Password required!";
      } else if (value.length < 8) {
        errors = "Password must be 8 characters or longer!";
      }
    }

    console.log("errors=>", errors);
    return errors;
  };

  return (
    <div className="main">
      <div className="main__header">
        <a className="header__logo">
          <img
            src="	https://app-cdn.clickup.com/assets/images/brand/clickup_color-new.svg"
            className="herder__img"
            alt="ClickUp"
          ></img>
        </a>
        <div className="header__right">
          <div className="right__text">Don't have an account?</div>
          <a className="right__button">Sign up</a>
        </div>
      </div>

      <div className="main__content">
        <div className="background"></div>
        <div className="content">
          <div className="content__form">
            <h1 className="form__title">Welcome back!</h1>
            <div className="form__main">
              <form onSubmit={handleSubmit}>
                {/* Email */}
                <div className="main__row">
                  <label className="row__label">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="row__input"
                    pattern="\w+@[a-z]+[.][a-z]*"
                    value={formValues.email}
                    onChange={handleChange}
                    required={formRequied}
                    // onBlur={handleFocus}
                    // required={true}
                    // data-focused={focused.toString()}
                  ></input>
                  <div className="row__icon icon ">
                    <img src={img_email} alt="email" />
                  </div>
                  {/* validate  */}
                  <p className="row--showError">
                    <span>{formErrors.email}</span>
                  </p>
                </div>

                {/* password */}
                <div className="main__row">
                  <label className="row__label">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password "
                    className="row__input"
                    pattern="\w{8,100}"
                    value={formValues.password}
                    onChange={handleChange}
                    required={formRequied}

                    // onBlur={handleFocus}
                  ></input>
                  <div className="row__icon icon ">
                    <img src={img_password} alt="password" />
                  </div>
                  <p className="row--showError">
                    <span>{formErrors.password}</span>
                  </p>
                  <div className="row__show show">
                    <a id="component-login-forgot" draggable="false">
                      Forgot Password
                      {/* <span> Password</span> */}
                    </a>
                  </div>
                </div>

                <button
                  type="submit"
                  className="main_button"
                  // data-focused={focused.toString()}
                >
                  <span className="button__text">Log In</span>
                  <div className="button__spinner">
                    <div className="spinner__bounce1"></div>
                    <div className="spinner__bounce2"></div>
                    <div className="spinner__bounce3"></div>
                  </div>
                </button>

                <div className="main__sso">
                  <a href="">or login with SSO</a>
                </div>
              </form>
            </div>
          </div>
          <div className="content__bottom">
            <div className="bottom__text">
              Don't have an account?
              <a data-test="text__link" className="text__link">
                {" "}
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
