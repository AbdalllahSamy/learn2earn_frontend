import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import Style from "./Login.module.css";
import axios from "../../api/axios";
import { IoEye as ShowPasswordIcon } from "react-icons/io5";
import { IoEyeOff as HidePasswordIcon } from "react-icons/io5";
import GoogleLoginHandler from "../../Custom Component/GoogleLoginHandler";
import useChangeTitle from "../../hooks/useChangeTitle";
import { motion } from "framer-motion";
import Loading from "../Custom Components/Loading";

const LOGIN_URL = "/auth/login";

export default function Login() {
  const { setAuth } = useAuth();
  const navigateFunction = useNavigate();
  const userRef = useRef();

  useChangeTitle("L2E | Login");

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [login_type, setLoginType] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (auth) {
      navigateFunction(`/${auth.type_user}/dashboard`);
    }
  }, []);

  useEffect(() => {
    let message = localStorage.getItem("account");
    if (message) {
      toast.success(message, {
        position: "top-right",
        duration: 6000,
        style: {
          backgroundColor: "#00FF0A",
          color: "white",
        },
        iconTheme: {
          primary: "white",
          secondary: "#00FF0A",
        },
      });
      localStorage.removeItem("account");
    }
  }, []);

  function handlePhoneNumberValidation(user) {
    // user is the phone number
    let phoneNumber = user;

    // if the phone number starts with 0
    if (!phoneNumber.startsWith("+2")) {
      // Your code here
      phoneNumber = "+2" + phoneNumber;
    }
    return phoneNumber;
  }

  const handleSubmit = async (e) => {
    setSubmitting(true);
    e.preventDefault();
    let login_type_handle = login_type;
    let username = user;
    if (login_type_handle === "phone") {
      username = handlePhoneNumberValidation(username);
    }

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({
          username: username,
          password: pwd,
          type: login_type_handle,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const accessToken = response.data.data.token;
      const type = response.data.data.user.type_user;
      localStorage.setItem(
        "auth",
        JSON.stringify({ user, accessToken, type_user: type })
      );
      // setAuth({ user, accessToken, type });

      // reset the form
      setUser("");
      setPwd("");

      const $userType = response.data.data.user.type_user;
      if ($userType === "admin" || $userType === "superadmin") {
        navigateFunction("/admin/dashboard");
      } else if ($userType === "teacher") {
        navigateFunction("/teacher/dashboard");
      } else if ($userType === "parent") {
        navigateFunction("/parent/dashboard");
      } else {
        navigateFunction("/student/dashboard");
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message, {
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
      } else {
        toast.error("Check your internet", {
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
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div>
        <Toaster position="top-right" />
      </div>
      <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        key="login-form"
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`${Style.loginFormSide}`}
      >
        <div className={`${Style.smallCard} w-100`}>
          <div className="text-center">
            <h3 className={`${Style.h3Login} `}>login</h3>
            <span className={`${Style.line} `}></span>
            <p className={`${Style.pLogin}`}>
              Welcome back to Learn2Earn education platform
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              {/* <i className={`fa-regular fa-user ${Style.frameUsername} position-absolute` }></i> */}
              <input
                type="text"
                placeholder="Username"
                className={`form-control ${Style.loginForm}`}
                ref={userRef}
                autoComplete="off"
                onChange={(e) => {
                  setUser(e.target.value);
                  if (user.includes("@")) {
                    setLoginType("email");
                  } else {
                    setLoginType("phone");
                  }
                }}
                value={user}
                required
              />
              <div className="position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className={`form-control ${Style.loginForm} my-4`}
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                />
                {!showPassword ? (
                  <ShowPasswordIcon
                    onClick={() => setShowPassword(!showPassword)}
                    size={20}
                    color="gray"
                    className="position-absolute r-[50px] vertical-center"
                    style={{ right: "20px", cursor: "pointer" }}
                  />
                ) : (
                  <HidePasswordIcon
                    onClick={() => setShowPassword(!showPassword)}
                    size={20}
                    color="gray"
                    className="position-absolute vertical-center"
                    style={{ right: "20px", cursor: "pointer" }}
                  />
                )}
              </div>

              <div className={`${Style.submitForm} flex items-center justify-center`}>
                {!submitting ? (
                  <button className="w-full h-full" type="submit">Login Now</button>
                ) : (
                  <Loading />
                )}
              </div>
            </form>
            <Link className={`navbar-brand w-fit block`} to="#">
              <p className={`text-sm my-[1em] font-bold`}>Forget My Password</p>
            </Link>
            <GoogleLoginHandler />
            {/* <Link
                type="button"
                className={`${Style.loginWithGoogle} d-flex`}
                to="#"
              >
                <div className={`text-center d-flex align-items-center`}>
                  <div className="googleDiv">
                    <GoogleIcon className={`${Style.googleImg}`} />
                  </div>
                  <span className={`${Style.regularSpan}`}>
                    {" "}
                    Login with{" "}
                    <span className={`${Style.googleSpan}`}>google</span>
                  </span>
                </div>
              </Link> */}
            <p className={`text-center mt-3 ${Style.donotHaveAcc}`}>
              {" "}
              Don't have an account?{" "}
              <span className={`${Style.Signin}`}>
                <Link to="/register" className="text-decoration-none">
                  Sign Up
                </Link>
              </span>
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
