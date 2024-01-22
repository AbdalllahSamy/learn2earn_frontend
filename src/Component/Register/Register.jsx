import React, { useState } from "react";
import style from "./Register.module.css";
import { Formik, useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";

export default function Register() {
  const [currentStep, setCurrentStep] = useState(1);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigateFunction = useNavigate();

  const [isLoad, setIsLoad] = useState(false);

  const handleNextButton = () => {
    if (currentStep === 1) {
      // Perform any necessary validation or data processing for the first part
      // ...

      // Move to the second part
      setCurrentStep(2);
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
      const { data } = await axios.post(
        "https://api-test.llearn2earn.com/api/auth/register",
        values
      );
      if (data.ok) {
        // alert("seccess");
        navigateFunction("/login");
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
      if (values.name.length > 30 || values.name.length < 3) {
        errors.name = "Name Size must be between 3 and 30 Character";
      }

      if (
        values.email.includes("@") === false ||
        values.email.includes(".") === false
      ) {
        errors.email = "Email invalid , It shoud contain @ and . ";
      }

      if (!values.phone.match(/^(002|\+2)01[0125]\d{8}$/)) {
        errors.phone = "phone is invalid , It must start with 002 or +2 ";
      }

      if (
        !values.password.match(/^(?=.*[A-Z])(?=.*\d).+$/) ||
        values.password.length < 8 ||
        values.password.length > 40
      ) {
        errors.password =
          "Password is invalid. It should contain at least one capital letter and number, and length be between 8 and 40 characters";
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
      <form onSubmit={formikObject.handleSubmit}>
        <div className={`${style.registerBody}`}>
          <div className={`${style.parentForm} w-50 `}>
            <div className={`${style.headerFirstRegister}`}>
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
                      className="w-100 form-control"
                      value={formikObject.values.name}
                      onChange={formikObject.handleChange}
                      onBlur={formikObject.handleBlur}
                    />

                    {formikObject.errors.name && formikObject.touched.name ? (
                      <div className="text-danger">
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
                      className="w-100 form-control"
                      value={formikObject.values.email}
                      onChange={formikObject.handleChange}
                      onBlur={formikObject.handleBlur}
                    />
                    {formikObject.errors.email && formikObject.touched.email ? (
                      <div className="alert alert-danger my-2">
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
                      className="w-100 form-control"
                      value={formikObject.values.phone}
                      onChange={formikObject.handleChange}
                      onBlur={formikObject.handleBlur}
                    />
                    {formikObject.errors.phone && formikObject.touched.phone ? (
                      <div className="alert alert-danger my-2">
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
                          className="form-control"
                          value={formikObject.values.password}
                          onChange={formikObject.handleChange}
                          onBlur={formikObject.handleBlur}
                        />
                        {formikObject.errors.password &&
                        formikObject.touched.password ? (
                          <div className="alert alert-danger my-2">
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
                          className="form-control"
                          name="password_confirmation"
                          value={formikObject.values.password_confirmation}
                          onChange={formikObject.handleChange}
                          onBlur={formikObject.handleBlur}
                        />
                        {formikObject.errors.password_confirmation &&
                        formikObject.touched.password_confirmation ? (
                          <div className="alert alert-danger my-2">
                            {" "}
                            {formikObject.errors.password_confirmation}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>

                    <div className={`${style.nextButton} mt-4`}>
                      <button onClick={handleNextButton}>
                        Next <i className="fa-solid fa-angle-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="secondRegister mt-3">
                  {errorMsg ? <h5 className="text-danger">{errorMsg}</h5> : ""}

                  <div className={`${style.firstRegisterBody}`}>
                    <label htmlFor="age" className="mt-4 ">
                      Age*
                    </label>
                    <input
                      type="number"
                      id="age"
                      placeholder="Age"
                      className="w-100 form-control mb-4"
                      value={formikObject.values.age.toString()}
                      onChange={formikObject.handleChange}
                      onBlur={formikObject.handleBlur}
                    />
                    {formikObject.errors.age && formikObject.touched.age ? (
                      <div className="alert alert-danger my-2">
                        {" "}
                        {formikObject.errors.age}
                      </div>
                    ) : (
                      ""
                    )}

                    <label htmlFor="gender">Gender*</label>
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
