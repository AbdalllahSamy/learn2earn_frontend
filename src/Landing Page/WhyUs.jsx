import React from "react";
import polygonImg from "../assets/Landing/ploygonCard.png";
import shape2 from "../assets/Landing/shape2.gif";
import { motion } from "framer-motion";
export default function WhyUs() {
  return (
    <motion.section
      initial={{ opacity: 0, filter: `blur(${10}px)` }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
      className="py-[4em] mt-[2em] relative z-[4] bg-white flex overflow-hidden justify-between"
    >
      <motion.img
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", type: "spring" }}
        src={shape2}
        className="absolute right-[-100px] top-[200px] w-[300px] h-[300px]"
        alt=""
      />
      <motion.img
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", type: "spring" }}
        src={shape2}
        className="absolute left-[-100px] bottom-[200px] w-[300px] h-[300px] opacity-[0.6]"
        alt=""
      />{" "}
      <div className="container-landing w-full mx-auto flex flex-col gap-[30px]">
        <h1 className="text-[4rem] font-black">
          Why <span className="underline">us?</span>
        </h1>
        <div className="landing-why-us-grid gap-[20px] md:gap-[80px]">
          <div className="card-why-us w-full relative overflow-hidden text-white linear-card-bg-1 p-[2em] flex flex-col justify-around ">
            <h1 className="font-black">Empower</h1>
            <p className="text-[1.7rem]">
              Unleash the power of our dynamic online platform, where
              interactive courses and engaging content .
            </p>
            <p className="text-[1.5rem] font-black">
              <span className="text-[2.5rem] text-graident-1">+200</span> <br />{" "}
              Courses
            </p>
            <img
              className="absolute right-0 bottom-0 z-[1]"
              src={polygonImg}
              alt=""
            />
          </div>
          <div className="card-why-us w-full relative overflow-hidden linear-card-bg-2 p-[2em] text-black  flex flex-col justify-around ">
            <h1 className="font-black">Connect</h1>
            <p className="text-[1.7rem]">
              Our platform brings together a community of inspiring teachers
              dedicated to your academic success.
            </p>
            <p className="text-[1.5rem] font-black">
              <span className="text-[2.5rem] text-graident-2">+50</span> <br />{" "}
              Teachers
            </p>
            <img
              className="absolute right-0 bottom-0 z-[1]"
              src={polygonImg}
              alt=""
            />
          </div>
          <div className="card-why-us-2 relative overflow-hidden linear-card-bg-1 p-[2em] text-white w-full flex flex-col justify-around ">
            <h1 className="font-black">Earn</h1>
            <p className="text-[1.7rem]">
              Transform education into an enriching experience! Gain valuable
              insights while earning rewards
            </p>
            <p className="text-[1.5rem] font-black">
              <span className="text-[2.5rem]">+$</span> <br />
              Earnings
            </p>
            <img
              className="absolute right-0 bottom-0 z-[1]"
              src={polygonImg}
              alt=""
            />
          </div>
          <div className="card-why-us-3 relative overflow-hidden text-black linear-card-bg-2 p-[2em] w-full flex flex-col justify-around ">
            <h1 className="font-black">Collaborate</h1>
            <p className="text-[1.5rem]">
              Enjoy seamless collaboration tools designed to enhance
              communication and interaction between educators and students.
            </p>
            <p className="text-[1.5rem] font-black">
              <span className="text-[3.5rem] text-graident-2">∞</span> <br />{" "}
              Explore a diverse range of engaging learning experiences
            </p>
            <img
              className="absolute right-0 bottom-0 z-[1]"
              src={polygonImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
