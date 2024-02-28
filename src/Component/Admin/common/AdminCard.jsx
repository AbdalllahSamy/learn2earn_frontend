import React, { useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import { BluredEffect } from "../../../context/BluredEffect";
import ImgBg from "../../../assets/card.gif";
import axios from "../../../api/axios";

export default function AdminCard({
  type,
  closePortal,
  defaultState,
  id,
  realTimeUpdate,
}) {
  
  useEffect(() => {
    realTimeUpdate(null);
  }, []);

  function manageUsers(id, link, type) {
    const authData = JSON.parse(localStorage.getItem("auth"));
    const token = authData.accessToken;

    axios
      .post(
        link,
        { id },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        realTimeUpdate({ id, data: res.data.data.data });
        closePortal(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function handleSubmit() {
    if (type === "active") {
      manageUsers(id, "/admin/users/manage-active", "active");
    } else if (type === "verify") {
      manageUsers(id, "/admin/users/manage-verify", "verify");
    } else if (type === "premium") {
      manageUsers(id, "/admin/users/manage-premium", "premium");
    }
  }


  const handleParentClick = () => {
    // Do something when clicked on the parent
    closePortal(false);
  };

  const handleChildClick = (event) => {
    event.stopPropagation(); // Prevent the event from reaching the parent
    handleSubmit();
    // Do something when clicked on a child
  };

  const preventParentClick = (event) => {
    event.stopPropagation(); // Prevent the event from reaching the parent
  };

  return createPortal(
    <div
      onClick={handleParentClick}
      className="z-[100000] h-[100vh] backdrop-blur-sm z-[5555] fixed text-white w-[100vw]"
    >
      <div
        onClick={preventParentClick}
        className="bg-white full-center-fixed w-full md:w-[500px] overflow-hidden py-[2em] button-shadow relative rounded-lg "
      >
        <img
          className="left-0 top-0 w-[1000px] h-[1000px] absolute object-cover z-[1]"
          src={ImgBg}
          alt=""
        />
        <div className="pb-[2em] z-[50] relative">
          <h5 className="text-center text-[2rem] font-black">Are you Sure?</h5>
        </div>
        <div className="px-[1em] z-[50] relative w-full md:max-w-[70%] mx-auto text-center">
          <p>
            {!defaultState
              ? "This user is already a Learn2Earn member , do you want to remove the membership?"
              : "This user is not a Learn2Earn member , do you want to make the user a member?"}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={handleChildClick}
            className={`p-[0.5em] px-[2.5em] button-shadow capitalize text-[1em] z-[50] relative font-black rounded-lg ${
              defaultState
                ? "bg-[#f0fdf4] text-[#38945a]"
                : " bg-[#ffe7e7] text-[#ff4040]"
            }`}
          >
            {!defaultState && "Remove"} {type}
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal-card")
  );
}
