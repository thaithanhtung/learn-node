import { useState, useEffect } from "react";
import "./style.scss";
import img_email from "./img/email.png";
import img_password from "./img/password.png";

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

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    var errorInput = validate(name, value);

    setFormErrors({ ...formErrors, [name]: errorInput });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    var errorInputEmail = "";
    var errorInput = "";

    if (formValues.email === "") {
      errorInputEmail = validate("email", formValues.email);
      setFormRequied(!formRequied);
    }
    if (formValues.password === "") {
      errorInput = validate("password", formValues.password);
      setFormRequied(!formRequied);
    }

    var allError = {
      email: errorInputEmail,
      password: errorInput,
    };
    setFormErrors({ ...formErrors, ...allError });
  };

  const validate = (name: string, value: string): string => {
    var errors: string = "";

    const regex = /\w+@[a-z]+[.][a-z]*/;
    if (name === "email") {
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

    return errors;
  };

  return (
    <div className="main">
      <div className="main__header">
        <a className="header__logo">
          <img
            src="	https://app-cdn.clickup.com/assets/images/brand/clickup_color-new.svg"
            className="header__img"
            alt="ClickUp"
          ></img>
        </a>
        <div className="header__right">
          <div className="right__text">Don't have an account?</div>
          <a className="right__button">Sign up</a>
        </div>
      </div>

      <div className="main__container">
        <div className="container__background"></div>
        <div className="container__content">
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
                  ></input>
                  <div className="row__icon  ">
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
                  ></input>
                  <div className="row__icon ">
                    <img src={img_password} alt="password" />
                  </div>
                  <p className="row--showError">
                    <span>{formErrors.password}</span>
                  </p>
                  <div className="row__show ">
                    <a id="component-login-forgot" draggable="false">
                      Forgot Password
                    </a>
                  </div>
                </div>

                <button type="submit" className="main__button">
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
