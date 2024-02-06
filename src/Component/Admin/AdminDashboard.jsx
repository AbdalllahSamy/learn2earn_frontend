import React from "react";
import styles from "./Admin-common.module.css";
export default function AdminDashboard() {
  return (
    <div
      className={`rounded-lg ${styles["push-left"]} bg-white w-fit p-[2em] ${styles["curve-shape"]}`}
    >
      <h1>Admin Dashboard is here</h1>
    </div>
  );
}
