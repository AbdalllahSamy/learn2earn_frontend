import React, { useEffect, useState } from "react";
import NavBar from "../Component/Layout/NavBar";

// teacher
import SettingImg from "../assets/Teacher/IconsNav/settingImg.svg";
import CartImg from "../assets/Teacher/IconsNav/cartIcon.svg";
import NotificationImg from "../assets/Teacher/IconsNav/notification.svg";
import ApplicationImg from "../assets/Teacher/IconsNav/application.svg";
import toast, { Toaster } from "react-hot-toast";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import Tooltip from "../Component/Custom Components/Tooltip";
import UserMenu from "./UserMenu";

export default function NavBarType() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    const token = authData.accessToken;
    axios
      .get("/user/my-data", {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      })
      .then((res) => {
        setUserData(res.data.data); // Assuming the response data should be stored in userData state
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);

  const handleLogout = () => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    const token = authData.accessToken;
    if (authData) {
      axios
        .post("/user/logout", null, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          localStorage.removeItem("auth");
          navigate("/login");
        })
        .catch((error) => {
          toast.error("Logout Failed", {
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
        });
    }
  };

  if (userData.type_user === "admin") {
    return (
      <NavBar>
        <div>
          <Toaster position="top-right" />
        </div>
        <UserMenu handleLogout={handleLogout} />
        {/* <button
          className="bg-red-600 text-white font-black rounded-lg px-[2.5em] py-[0.5em]"
          onClick={handleLogout}
        >
          Logout
        </button> */}
      </NavBar>
    );
  } else if (userData.type_user === "teacher") {
    return (
      <>
        <div>
          <Toaster position="top-right" />
        </div>
        <NavBar>
          <div className="flex items-center gap-[10px]">
            <ul
              className="flex items-center gap-[10px]"
              style={{ margin: 0, marginLeft: "0.5em", padding: 0 }}
            >
              <li className="cursor-pointer">
                <Tooltip title="Settings">
                  <div className="bg-white rounded-full p-[0.5em]">
                    <img
                      src={SettingImg}
                      width={20}
                      height={20}
                      alt="settings-icon"
                    />
                  </div>
                </Tooltip>
              </li>
              <li className="cursor-pointer">
                <Tooltip title="Cart">
                  <div className="bg-white rounded-full p-[0.5em]">
                    <img src={CartImg} width={20} height={20} alt="cart-icon" />
                  </div>
                </Tooltip>
              </li>
              <li className="cursor-pointer">
                <Tooltip title="Notifications">
                  <div className="bg-white rounded-full p-[0.5em]">
                    <img
                      src={NotificationImg}
                      width={20}
                      height={20}
                      alt="notifications-icon"
                    />
                  </div>
                </Tooltip>
              </li>
              <li className="cursor-pointer">
                <Tooltip title="Applications">
                  <div className="bg-white rounded-full p-[0.5em]">
                    <img
                      src={ApplicationImg}
                      width={20}
                      height={20}
                      alt="application-icon"
                    />
                  </div>
                </Tooltip>
              </li>
              <li>{/* <img src={userData} alt="" /> */}</li>
            </ul>
            <UserMenu handleLogout={handleLogout} />
            {/* <button
              className="bg-red-600  hidden md:block text-white font-black rounded-lg px-[2.5em] py-[0.5em]"
              onClick={handleLogout}
            >
              Logout
            </button> */}
          </div>
        </NavBar>
      </>
    );
  }

  return (
    <NavBar>
      <UserMenu handleLogout={handleLogout} />
      {/* <button
        className="bg-red-600 hidden md:block text-white font-black rounded-lg px-[2.5em] py-[0.5em]"
        onClick={handleLogout}
      >
        Logout
      </button> */}
    </NavBar>
  );
}
