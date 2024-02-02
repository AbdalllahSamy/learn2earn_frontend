import React, { useEffect, useRef, useState } from "react";
import Style from "./Login.module.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import axios from "../../api/axios";
export default function CompleteProfile() {
  const [isMounted, setIsMounted] = useState(false);
  const [nickname, setNickname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [phone, setPhone] = useState("");
  const [type_user, setTypeUser] = useState("student");

  const [errorState, setErrorState] = useState({
    status: false,
    errors: {},
  });

  const navigateFunction = useNavigate();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const temp_auth = JSON.parse(localStorage.getItem("temp_auth"));
    if (!temp_auth || !temp_auth["temp_token"]) {
      navigateFunction(`/login`);
    }
  }, [navigateFunction, isMounted]);

  const userRef = useRef();

  function handleSubmit(e) {
    setErrorState({
      status: false,
      errors: {},
    });
    e.preventDefault();

    const min = 11111111;
    const max = 99999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    const data = JSON.parse(localStorage.getItem("temp_auth"));

    const profile_data = {
      token: data.temp_token,
      name: data.name,
      email: data.email,
      gauth_id: data.gauth_id,
      type_user: type_user,
      nickname: nickname,
      gender: gender,
      age: age,
      phone: phone,
      password: randomNumber,
      password_confirmation: randomNumber,
    };

    axios
      .post("/auth/complete-form", profile_data)
      .then((res) => {
        localStorage.setItem(
          "account",
          `Email created successfully wait for activate your account`
        );
        navigateFunction(`/login`);
      })
      .catch((error) => {
        const errorData = error.response.data.data;
        const errorFields = Object.keys(errorData);
        const errorStateData = {};

        errorFields.forEach((field) => {
          errorStateData[field] = errorData[field][0];
        });

        setErrorState({
          status: true,
          errors: errorStateData,
        });
      });
  }

  return (
    <motion.div
      key="complete-profile"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`${Style["complete-profile-page"]}`}
    >
      <div className={`${Style.smallCard} w-100`}>
        <h3 className="font-bold">Complete Profile</h3>
        <p className="sub-title">
          Please fill out the form below to complete registration
        </p>
        <form
          className="flex flex-col justify-between gap-[20px]"
          onSubmit={handleSubmit}
        >
          <div className="inputs flex flex-col gap-[10px]">
            <label htmlFor="nickname">Nickname</label>
            <input
              type="text"
              id="nickname"
              placeholder="Nickname"
              name="Nickname"
              className={`form-control ${Style.loginForm}`}
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
            />
            {errorState.status && errorState.errors.Nickname && (
              <span className="text-red-500 text-sm">
                {errorState.errors.Nickname}
              </span>
            )}
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              placeholder="Age"
              className={`form-control ${Style.loginForm}`}
              value={age}
              name="age"
              onChange={(e) => setAge(e.target.value)}
              required
            />
            {errorState.status && errorState.errors.age && (
              <span className="text-red-500 text-sm">
                {errorState.errors.age}
              </span>
            )}
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              placeholder="Phone Number"
              className={`form-control ${Style.loginForm}`}
              value={phone}
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            {errorState.status && errorState.errors.phone && (
              <span className="text-red-500 text-sm">
                {errorState.errors.phone}
              </span>
            )}
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              placeholder="Gender"
              className="form-select select-bg-color"
              aria-label="Default select example"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <label htmlFor="type_user">Job Title</label>
            <select
              id="type_user"
              name="type_user"
              placeholder="Job Title"
              className="form-select select-bg-color"
              aria-label="Default select example"
              value={type_user}
              onChange={(e) => setTypeUser(e.target.value)}
              required
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="parent">Parent</option>
            </select>
          </div>

          <button type="submit" className={`${Style.submitForm}`}>
            Complete Profile
          </button>
        </form>
      </div>
    </motion.div>
  );
}
