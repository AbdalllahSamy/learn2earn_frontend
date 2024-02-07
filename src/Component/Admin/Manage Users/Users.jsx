import React, { useEffect, useState } from "react";
import Table from "./Table";
import styles from "../Admin-common.module.css";
import SearchComponent from "../../Layout/SearchComponent";
import { FaPlus } from "react-icons/fa";
import axios from "../../../api/axios";

export default function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    try {
      const authData = JSON.parse(localStorage.getItem("auth"));
      const token = authData.accessToken;

      console.log(token);

      axios
        .get("/admin/users/manage", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data.data);
          setData(res.data.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []); // empty dependency array means this effect runs once on mou

  return (
    <div
      className={`bg-white ${styles["push-left"]} flex-grow sidebar ${styles["curve-shape"]} button-shadow`}
    >
      <div className="flex items-center justify-between p-[1em]">
        <h3>Users</h3>
        <div className="flex items-center md:gap-[20px] md:px-[2em]">
          <SearchComponent />
          <button className="button-shadow flex items-center gap-[5px] rounded px-[1em] py-[0.2em]">
            <FaPlus /> New
          </button>
          {/* <button className="button-shadow rounded px-[1em] py-[0.2em]">
            Filter
          </button> */}
        </div>
      </div>
      <Table data={data} />
    </div>
  );
}
