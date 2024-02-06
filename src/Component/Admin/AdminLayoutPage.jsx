import React, { useEffect, useState } from "react";
import MainSideBar from "./MainSideBar";
import { Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
export default function AdminLayoutPage() {
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
      <MainSideBar />
      <motion.div
        initial={{ opacity: onMobile ? 1 : 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "tween", duration: 0.2 }}
        key={location.pathname}
        className="flex "
      >
        <Outlet />
      </motion.div>
    </div>
  );
}
