import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { FaList } from "react-icons/fa6";

export default function LandingNavBar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const [onTop, setOnTop] = useState(window.scrollY === 0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 450);
  const [showDropDown, setShowDropDown] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setOnTop(window.scrollY === 0);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setOnTop(window.scrollY === 0);
      });
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 450);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setIsMobile(window.innerWidth < 450);
      });
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (latestScrollY) => {
    const prevScrollY = scrollY.getPrevious();
    // console.log("latest ", latestScrollY, "prev ", prevScrollY);
    if (latestScrollY > prevScrollY && latestScrollY > 120) {
      setHidden(true);
    } else {
      if (prevScrollY - latestScrollY > 4) setHidden(false);
    }
  });

  return (
    <motion.div
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed  container-landing z-[10] ${
        onTop ? "bg-transparent" : "bg-[#ffffffdb]"
      }  backdrop-blur-sm flex items-center justify-between top-0 w-full`}
    >
      <h1 style={{ margin: 0 }} className="font-bold w-fit md:text-[2rem]">
        {" "}
        <span className="text-[#B173F9]">Learn</span> 2{" "}
        <span className="text-black bg-[#FFFD82] px-[0em] rounded-lg">
          Earn
        </span>
      </h1>
      {!isMobile ? (
        <div className="flex items-center gap-[20px]">
          <Link
            style={{ color: "#000000" }}
            to="/login"
            className="px-[2.5em] md:px-[2.5em] py-[0.3em] border-custom rounded-full text-[#201F04] text-[1rem] md:text-[1.3rem] font-black"
          >
            Log in
          </Link>
          <Link
            style={{ color: "#000000" }}
            to="/register"
            className="px-[1.5em] md:px-[2.5em] bg-[#FFFD82] landing_login_button py-[0.3em] text-[#201F04] rounded-full text-[1rem] md:text-[1.3rem] font-black"
          >
            Sign up
          </Link>
        </div>
      ) : (
        <div className="relative">
          <FaList
            className="cursor-pointer"
            onClick={() => {
              setShowDropDown((prev) => !prev);
            }}
            size={30}
          />
          <AnimatePresence mode="wait">
            {!showDropDown && (
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                style={{ padding: 0 }}
                className="absolute left-[-180%] top-[40px] w-[100px]"
              >
                <ul className="flex bg-white py-[1em] px-[1em] flex-col rounded-lg gap-[10px]">
                  <Link className="text-black" to="/login">
                    Log in
                  </Link>
                  <Link className="text-black" to="/register">
                    Sign up
                  </Link>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
}
