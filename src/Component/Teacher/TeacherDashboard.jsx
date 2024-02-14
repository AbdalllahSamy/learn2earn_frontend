import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import PremiumCard from "./PremiumCard";
import Loading from "../Custom Components/Loading";

function TeacherDashboard() {
  const [userData, setUserData] = useState(null);

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
      .catch((error) => {});
  }, []);

  if (!userData) {
    return (
      <div className="res-height w-full flex items-start py-[5em] justify-center">
        <Loading color="#2b4cc4" size={20} />
      </div>
    );
  }

  return (
    <div className="w-full">
      <h1>Hi, {userData.name} </h1>
      {!userData.premium ? <PremiumCard /> : ""}
    </div>
  );
}

export default TeacherDashboard;
