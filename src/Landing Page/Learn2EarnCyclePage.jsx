import React from "react";
import Learn2EarnCycle from "../assets/Landing/learn-earn-cycle.png";
import { motion } from "framer-motion";
export default function Learn2EarnCyclePage() {
  const variants = {
    initial: {
      opacity: 0,
      y: -30,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transitionEffect: {
      delay: 0.5,
    },
  };

  return (
    <section className="py-[4em] mb-[2em] relative z-[4] bg-white">
      <div className="container-landing mx-auto flex flex-col lg:flex-row gap-[30px] items-center justify-between">
        <motion.img
          whileInView={{
            rotate: 360,
            transition: { duration: 1.5, type: "spring" },
          }}
          src={Learn2EarnCycle}
          className="w-full max-w-[500px] lg:w-[48%]"
          alt=""
        />
        <div className="right-side-section-2 w-full lg:w-[48%] mt-[1em]">
          <motion.h1
            variants={variants}
            initial="initial"
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            className="font-black landingpage-text text-[2rem] lg:text-[4rem] mb-[1em]"
          >
            <span className="text-[#B173F9]">Empower</span> Your Education with
            Experienced Teachers
          </motion.h1>
          <motion.p
            variants={variants}
            initial="initial"
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.25 },
            }}
            className="text-[1.5rem] landingpage-text"
          >
            Experience a revolutionary way to learn and earn simultaneously! At
            our online learning platform, discover a unique opportunity where
            your dedication to learning rewards you financially. Engage in our
            diverse educational programs led by passionate teachers.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
