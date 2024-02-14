import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { useCheckValidation } from "../../hooks/useCheckValidation";
import TeacherSideBar from "./common/TeacherSideBar";
export default function AdminLayoutPage() {
  useCheckValidation("teacher");
  const [onMobile, setOnMobile] = useState(window.innerWidth < 1080);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1080) {
        setOnMobile(true);
      } else setOnMobile(false);
    });
    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth < 1080) {
          setOnMobile(true);
        } else setOnMobile(false);
      });
    };
  }, []);

  return (
    <div className="main-layout">
      <TeacherSideBar />
      <motion.div
        initial={{ opacity: onMobile ? 1 : 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "tween", duration: 0.2 }}
        key={location.pathname}
        className="flex push-left bg-white res-height custom-container py-[2em] curve-shape overflow-x-hidden"
      >
        <Outlet />
      </motion.div>
    </div>
  );
}
