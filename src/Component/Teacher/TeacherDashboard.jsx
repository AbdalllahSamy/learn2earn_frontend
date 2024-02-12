import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import PremiumCard from "./PremiumCard";

function TeacherDashboard() {
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
      });
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
      <h1>Hi, {userData.name} </h1>
      {!userData.premium ? <PremiumCard /> : ""}
    </div>
  );
}

export default TeacherDashboard;
