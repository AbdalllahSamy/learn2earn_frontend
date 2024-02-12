import React, { useEffect, useState } from "react";
import MainSideBar from "./MainSideBar";
import { Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useCheckValidation } from "../../hooks/useCheckValidation";
import AdminSideBar from "./common/AdminSideBar";
export default function AdminLayoutPage() {
  useCheckValidation("admin");

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
      <AdminSideBar />
      <motion.div
        initial={{ opacity: onMobile ? 1 : 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "tween", duration: 0.2 }}
        key={location.pathname}
        className="flex push-left custom-container curve-shape overflow-x-hidden"
      >
        <Outlet />
      </motion.div>
    </div>
  );
}
