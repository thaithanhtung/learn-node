import { useState } from "react";

import "./Login_style.scss";

import Login_email from "../../Image/Login_email.png";
import Login_password from "../../Image/Login_password.png";

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

  const [formRequestEmail, setFormRequestEmail] = useState(false);
  const [formRequestPassword, setFormRequestPassword] = useState(false);

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
      setFormRequestEmail(!formRequestEmail);
    }
    if (formValues.password === "") {
      errorInput = validate("password", formValues.password);
      setFormRequestPassword(!formRequestPassword);
    }

    var allError = {
      email: errorInputEmail,
      password: errorInput,
    };
    setFormErrors({ ...formErrors, ...allError });
  };

  const validate = (name: string, value: string): string => {
    var errors: string = "";

    const regex = /\w@[a-z]+[.][a-z]/;
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
    <div className="mainLogin">
      <div className="mainLogin__headerLogin">
        <a className="headerLogin__logo" href="#/">
          <img
            src="	https://app-cdn.clickup.com/assets/images/brand/clickup_color-new.svg"
            className="logo__img"
            alt="ClickUp"
          ></img>
        </a>
        <div className="headerLogin__rightLogin">
          <div className="rightLogin__text">Don't have an account?</div>
          <a className="rightLogin__button" href="#/">
            Sign up
          </a>
        </div>
      </div>
      <div className="mainLogin__containerLogin">
        <div className="containerLogin__background"></div>
        <div className="containerLogin__contentLogin">
          <div className="contentLogin__formLogin">
            <h1 className="formLogin__title">Welcome back!</h1>
            <div className="formLogin__main">
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
                    required={formRequestEmail}
                  ></input>
                  <div className="row__icon  ">
                    <img src={Login_email} alt="email" />
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
                    required={formRequestPassword}
                  ></input>
                  <div className="row__icon ">
                    <img src={Login_password} alt="password" />
                  </div>
                  <p className="row--showError">
                    <span>{formErrors.password}</span>
                  </p>
                  <div className="row__show ">
                    <a id="component-login-forgot" draggable="false" href="#/">
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
                  <a href="#/">or login with SSO</a>
                </div>
              </form>
            </div>
          </div>
          <div className="contentLogin__bottom">
            <div className="bottom__text">
              Don't have an account?
              <a data-test="text__link" className="text__link" href="#/">
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
