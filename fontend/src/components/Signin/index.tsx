import { useState } from "react";

import "../styles/SignIn_style.scss";

import SignIn_user from "../Image/SignIn_user.png";
import SignIn_email from "../Image/SignIn_email.png";
import SignIn_password from "../Image/SignIn_password.png";

const SignIn = () => {
  type ValueType = {
    username: string;
    email: string;
    password: string;
  };

  type ErrorType = {
    username: string;
    email: string;
    password: string;
  };

  const [statePassword, setStatePassword] = useState(false);

  const toggle = () => {
    setStatePassword((statePassword) => !statePassword);
  };
  // validate

  const inittialValue = { username: "", email: "", password: "" };
  const initialError = { username: "", email: "", password: "" };

  const [formValue, setFormValue] = useState<ValueType>(inittialValue);
  const [formError, setFormErrors] = useState<ErrorType>(initialError);

  const [formRequiedUser, setFormRequiedUser] = useState(false);
  const [formRequiedEmail, setFormRequiedEmail] = useState(false);
  const [formRequiedPassword, setFormRequiedPassword] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });

    const errorInput = validate(name, value);
    setFormErrors({ ...formError, [name]: errorInput });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let errorInput = "";
    let errorInputEmail = "";
    let errorInputPassword = "";

    if (formValue.username === "") {
      errorInput = validate("username", formValue.username);
      setFormRequiedUser(!formRequiedUser);
    }
    if (formValue.email === "") {
      errorInputEmail = validate("email", formValue.email);
      setFormRequiedEmail(!formRequiedEmail);
    }
    if (formValue.password === "") {
      errorInputPassword = validate("password", formValue.password);
      setFormRequiedPassword(!formRequiedPassword);
    }

    let allError = {
      username: errorInput,
      email: errorInputEmail,
      password: errorInputPassword,
    };
    setFormErrors({ ...formError, ...allError });
  };

  const validate = (name: string, value: string): string => {
    let errors: string = "";
    const regex = /\w+@[a-z]+[.][a-z]*/;

    if (name === "username") {
      if (!value) {
        errors = "FullName required";
      }
    }
    if (name === "email") {
      if (!value) {
        errors = "Email required!";
      } else if (!regex.test(value)) {
        errors = "This email invalid";
      }
    }
    if (name === "password") {
      if (!value) {
        errors = "Password required";
      } else if (value.length < 8) {
        errors = "Password is more than 8 character";
      }
    }
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
          <div className="right__text"> Already playing with ClickUp? </div>
          <a className="right__button">Login</a>
        </div>
      </div>

      <div className="main__container">
        <div className="container__background"></div>
        <div className="container__content">
          <div className="content__form">
            <h1 className="form__title">Let's go!</h1>
            <div className="form__main">
              <form onSubmit={handleSubmit}>
                {/* fullname */}
                <div className="main__row">
                  <label className="row__label">Full Name</label>
                  <input
                    name="username"
                    type="text"
                    placeholder="John Doe"
                    className="row__input"
                    pattern="^[A-Za-z0-9]{1,100}$"
                    value={formValue.username}
                    onChange={handleChange}
                    required={formRequiedUser}
                  ></input>
                  <div className="row__icon ">
                    <img src={SignIn_user} alt="user" />
                  </div>
                  <p className="row--showError">
                    <span>{formError.username}</span>
                  </p>
                </div>
                {/* email */}
                <div className="main__row">
                  <label className="row__label">Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="example@site.com"
                    className="row__input"
                    pattern="\w+@[a-z]+[.][a-z]*"
                    value={formValue.email}
                    onChange={handleChange}
                    required={formRequiedEmail}
                  ></input>
                  <div className="row__icon ">
                    <img src={SignIn_email} alt="email" />
                  </div>
                  <p className="row--showError">
                    <span>{formError.email}</span>
                  </p>
                </div>
                {/* password */}
                <div className="main__row">
                  <label className="row__label">Choose Password</label>
                  <input
                    name="password"
                    placeholder="Minimum 8 characters"
                    className="row__input"
                    pattern="\w{8,100}"
                    value={formValue.password}
                    onChange={handleChange}
                    required={formRequiedPassword}
                    type={statePassword ? "text" : "password"}
                  ></input>
                  <div className="row__show">
                    <a onClick={toggle}>{statePassword ? "Hide" : "Show"}</a>
                  </div>

                  <div className="row__icon  ">
                    <img src={SignIn_password} alt="password" />
                  </div>

                  <p className="row--showError">
                    <span>{formError.password}</span>
                  </p>
                </div>

                <button type="submit" className="main__button">
                  <span className="button__text">Play with Clickup</span>
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
        </div>
      </div>
    </div>
  );
};

export default SignIn;
