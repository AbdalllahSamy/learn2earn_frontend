import React, { useEffect, useState } from "react";
import style from "./Register.module.css";
import { Formik, useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";

export default function Register() {
  const [currentStep, setCurrentStep] = useState(1);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isTopActive, setIsTopActive] = useState(false);
  const navigateFunction = useNavigate();

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (auth) {
      navigateFunction(`/${auth.type}/dashboard`);
    }
  }, []);

  const [isLoad, setIsLoad] = useState(false);

  const handleNextButton = () => {
    if (currentStep === 1) {
      let NameInput = document.getElementById("name");
      let PhoneInput = document.getElementById("phone");
      let EmailInput = document.getElementById("email");
      let passwordInput = document.getElementById("password");
      let passwordConfirmInput = document.getElementById("Confirm-Password");

      let semiUser = {
        name: NameInput.value,
        phone: PhoneInput.value,
        password: passwordInput.value,
        password_confirmation: passwordConfirmInput.value,
        email: EmailInput.value,
      };

      async function sendSemiData(semiUser) {
        setIsLoad(true);
        try {
          const response = await axios.post(
            "https://api-test.llearn2earn.com/api/auth/semi-register",
            semiUser
          );

          if (response.status === 200) {
            setIsTopActive(true);
            setCurrentStep(2);
            setErrorMsg(null);
          }
        } catch (error) {
          if (
            error.response.data.data &&
            error.response.data.data.name &&
            error.response.data.data.name[0]
          ) {
            toast.error(error.response.data.data.name[0], {
              position: "top-right",
              duration: 7000,
              style: {
                backgroundColor: "red",
                color: "white",
              },
              iconTheme: {
                primary: "white",
                secondary: "red",
              },
              ariaProps: {
                role: "status",
                "aria-live": "polite",
              },
            });
          }
          if (
            error.response.data.data &&
            error.response.data.data.email &&
            error.response.data.data.email[0]
          ) {
            toast.error(error.response.data.data.email[0], {
              position: "top-right",
              duration: 6000,
              style: {
                backgroundColor: "red",
                color: "white",
              },
              iconTheme: {
                primary: "white",
                secondary: "red",
              },
            });
          }
          if (
            error.response.data.data &&
            error.response.data.data.phone &&
            error.response.data.data.phone[0]
          ) {
            toast.error(error.response.data.data.phone[0], {
              position: "top-right",
              duration: 5000,
              style: {
                backgroundColor: "red",
                color: "white",
              },
              iconTheme: {
                primary: "white",
                secondary: "red",
              },
            });
          }
        }
        setIsLoad(false);
      }
      sendSemiData(semiUser);
    }
  };

  let user = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    phone: "",
    age: "",
    gender: "male",
    type_user: "student",
  };

  async function sendData(values) {
    setIsLoad(true);
    try {
      const response = await axios.post(
        "https://api-test.llearn2earn.com/api/auth/register",
        values
      );
      if (response.status === 200) {
        localStorage.setItem(
          "account",
          `Email created successfully wait for activate your account`
        );
        navigateFunction("/login");
        setErrorMsg(null);
      }
    } catch (error) {
      setErrorMsg(error.response.data.message);
    }

    setIsLoad(false);
  }

  const formikObject = useFormik({
    initialValues: user,
    onSubmit: sendData,
    validate: function (values) {
      setErrorMsg(null);

      const errors = {};
      if (!values.name.match(/^[a-zA-Z ]{3,30}$/)) {
        errors.name = "Name Size must be between 3 and 30 Character";
      }

      if (
        values.email.includes("@") === false ||
        values.email.includes(".") === false
      ) {
        errors.email = "Email invalid , It shoud contain @ and . ";
      }

      if (!values.phone.match(/^\+201[0125]\d{8}$/)) {
        errors.phone = "phone is invalid , It must start with +2 ";
      }

      if (
        !values.password.match(/^(?=.*[A-Z])(?=.*\d).+$/) ||
        values.password.length < 8 ||
        values.password.length > 40
      ) {
        errors.password =
          "Password is invalid. It should contain at least one capital letter, number, and length be between 8 and 40 characters";
      }

      if (values.password !== values.password_confirmation) {
        errors.password_confirmation = "Not matched with password";
      }

      if (typeof values.age === "string" && !values.age.match(/^[1-9]\d*$/)) {
        errors.age = "Invalid Age";
      }

      return errors;
    },
  });

  return (
    <>
      <div>
        {/* Other components... */}
        <Toaster position="top-right" />
      </div>
      <form onSubmit={formikObject.handleSubmit}>
        <div className={`${style.registerBody}`}>
          <div className={`${style.parentForm} `}>
            <div
              className={`${style.headerFirstRegister} ${
                isTopActive ? style.active : ""
              }`}
            >
              <div className={`${style.LeftIcon}`}>
                <i className="fa-solid fa-lock"></i>
              </div>

              <div className={`${style.rightIcon}`}>
                <i className="fa-solid fa-user"></i>
              </div>
            </div>
            <div className="container">
              {currentStep === 1 && (
                <div className="FirstRigester">
                  <div className={`${style.firstRegisterBody}`}>
                    <label htmlFor="name" className="mt-4">
                      Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Name"
                      className={`w-100 ${style["default-button"]} ${
                        formikObject.errors.name && formikObject.touched.name
                          ? style["error-input"]
                          : ""
                      } ${
                        !formikObject.errors.name && formikObject.touched.name
                          ? style["success-input"]
                          : ""
                      }`}
                      value={formikObject.values.name}
                      onChange={formikObject.handleChange}
                      onBlur={formikObject.handleBlur}
                    />

                    {formikObject.errors.name && formikObject.touched.name ? (
                      <div className={`text-danger ${style["error-text"]}`}>
                        {" "}
                        {formikObject.errors.name}
                      </div>
                    ) : (
                      ""
                    )}

                    <label htmlFor="email" className="mt-4">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      className={`w-100 ${style["default-button"]} ${
                        formikObject.errors.email && formikObject.touched.email
                          ? style["error-input"]
                          : ""
                      } ${
                        !formikObject.errors.email && formikObject.touched.email
                          ? style["success-input"]
                          : ""
                      }`}
                      value={formikObject.values.email}
                      onChange={formikObject.handleChange}
                      onBlur={formikObject.handleBlur}
                    />
                    {formikObject.errors.email && formikObject.touched.email ? (
                      <div className={`text-danger ${style["error-text"]}`}>
                        {" "}
                        {formikObject.errors.email}
                      </div>
                    ) : (
                      ""
                    )}

                    <label htmlFor="phone" className="mt-4">
                      Phone*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Phone"
                      className={`w-100 ${style["default-button"]} ${
                        formikObject.errors.phone && formikObject.touched.phone
                          ? style["error-input"]
                          : ""
                      } ${
                        !formikObject.errors.phone && formikObject.touched.phone
                          ? style["success-input"]
                          : ""
                      }`}
                      value={formikObject.values.phone}
                      onChange={formikObject.handleChange}
                      onBlur={formikObject.handleBlur}
                    />
                    {formikObject.errors.phone && formikObject.touched.phone ? (
                      <div className={`text-danger ${style["error-text"]}`}>
                        {formikObject.errors.phone}
                      </div>
                    ) : (
                      ""
                    )}

                    <div className={`${style.passwordsInpust}`}>
                      <div className={`${style.firstPassword}`}>
                        <label htmlFor="password" className="mt-4">
                          Password*
                        </label>
                        <input
                          type="password"
                          id="password"
                          placeholder="Password"
                          className={`w-100 ${style["default-button"]} ${
                            formikObject.errors.password &&
                            formikObject.touched.password
                              ? style["error-input"]
                              : ""
                          } ${
                            !formikObject.errors.password &&
                            formikObject.touched.password
                              ? style["success-input"]
                              : ""
                          }`}
                          value={formikObject.values.password}
                          onChange={formikObject.handleChange}
                          onBlur={formikObject.handleBlur}
                        />
                        {formikObject.errors.password &&
                        formikObject.touched.password ? (
                          <div className={`text-danger ${style["error-text"]}`}>
                            {" "}
                            {formikObject.errors.password}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className={`${style.rePassword}`}>
                        <label htmlFor="Confirm-Password" className="mt-4">
                          Confirm Password*
                        </label>
                        <input
                          type="password"
                          id="Confirm-Password"
                          placeholder="Confirm Password"
                          className={`w-100 ${style["default-button"]} ${
                            formikObject.errors.password_confirmation &&
                            formikObject.touched.password_confirmation
                              ? style["error-input"]
                              : ""
                          } ${
                            !formikObject.errors.password_confirmation &&
                            formikObject.touched.password_confirmation
                              ? style["success-input"]
                              : ""
                          }`}
                          name="password_confirmation"
                          value={formikObject.values.password_confirmation}
                          onChange={formikObject.handleChange}
                          onBlur={formikObject.handleBlur}
                        />
                        {formikObject.errors.password_confirmation &&
                        formikObject.touched.password_confirmation ? (
                          <div className={`text-danger ${style["error-text"]}`}>
                            {" "}
                            {formikObject.errors.password_confirmation}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>

                    <div className={`${style.nextButton} mt-4`}>
                      <button type="submit" onClick={handleNextButton}>
                        Next <i className="fa-solid fa-angle-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="secondRegister mt-3">
                  {errorMsg ? (
                    <h5 className="text-danger error-text">{errorMsg}</h5>
                  ) : (
                    ""
                  )}

                  <div className={`${style.firstRegisterBody}`}>
                    <label htmlFor="age" className="mt-4 ">
                      Age*
                    </label>
                    <input
                      type="number"
                      id="age"
                      placeholder="Age"
                      className={`w-100 ${style["default-button"]} ${
                        formikObject.errors.age && formikObject.touched.age
                          ? style["error-input"]
                          : ""
                      } ${
                        !formikObject.errors.age && formikObject.touched.age
                          ? style["success-input"]
                          : ""
                      }`}
                      value={formikObject.values.age.toString()}
                      onChange={formikObject.handleChange}
                      onBlur={formikObject.handleBlur}
                    />
                    {formikObject.errors.age && formikObject.touched.age ? (
                      <div className={`text-danger ${style["error-text"]}`}>
                        {" "}
                        {formikObject.errors.age}
                      </div>
                    ) : (
                      ""
                    )}

                    <label htmlFor="gender" className="mt-4 ">
                      Gender*
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      className="form-select"
                      aria-label="Default select example"
                      value={formikObject.values.gender}
                      onChange={formikObject.handleChange}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>

                    <label htmlFor="job" className="mt-4">
                      Job
                    </label>
                    <select
                      id="job"
                      className="form-select"
                      aria-label="Default select example"
                      value={formikObject.values.type_user}
                      name="type_user"
                      onChange={formikObject.handleChange}
                    >
                      <option value="student">Student</option>
                      <option value="teacher">Teacher</option>
                      <option value="parent">Parent</option>
                    </select>
                    <div className={`${style.nextButton} mt-4`}>
                      <button
                        type="submit"
                        disabled={
                          formikObject.isValid === false ||
                          formikObject.dirty === false
                        }
                      >
                        {isLoad ? (
                          <ThreeCircles
                            visible={true}
                            height="50"
                            width="80"
                            color="#fff"
                            ariaLabel="three-circles-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                          />
                        ) : (
                          "Sumbit"
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
