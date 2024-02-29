import React, { useEffect, useRef, useState } from "react";
import landingGirlImg from "../assets/Landing/girlLanding.png";
import subPhoto1 from "../assets/Landing/sub-photo-1.png";
import subPhoto2 from "../assets/Landing/sub-photo-2.png";
import subPhoto3 from "../assets/Landing/sub-photo-3.png";
import subPhoto4 from "../assets/Landing/sub-photo-4.png";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

export default function IntroPage() {
  const imageRef = useRef();
  const cardsRef = useRef();

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

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["0 0", "1 0"],
  });

  const { scrollYProgress: cardsContainerYProgress } = useScroll({
    target: cardsRef,
    offset: ["-0.8 0", "1 0"],
  });

  const [bluredCustomState, setBluredCustomState] = useState(0);

  const rotateImageEffect = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const FadeOutImageEffect = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const bluredEffect = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const opacityEffect = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const cardsFadeout = useTransform(cardsContainerYProgress, [0, 1], [0, -300]);
  const opacityEffectCards = useTransform(cardsContainerYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    bluredEffect.on("change", (blur) => {
      setBluredCustomState(blur);
    });
  }, []);

  return (
    <section className="bg-landingPage py-[7em] overflow-x-hidden">
      <div className=" top-side flex container-landing mx-auto flex-col lg:flex-row items-center  justify-between py-[6em]">
        <motion.div className="left-side w-full lg:w-[50%]">
          <motion.h1
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.55 }}
            className="font-black landingpage-text text-[2.5rem] mb-[1em]"
          >
            Empower Your <span className="text-[#B173F9]">Education</span> In A
            Unique way.
          </motion.h1>
          <motion.p
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.8 }}
            className="text-[1.5rem] lg:text-[2rem] landingpage-text"
          >
            Engage in our diverse educational programs led by passionate
            teachers, and as you expand your knowledge, you'll also earn
            rewards.
          </motion.p>
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ delay: 1.05 }}
            s
          >
            <Link
              to={"/register"}
              className="landing_login_button text-black rounded-full my-[2em] mx-auto block text-center lg:inline-block mt-[1em] bg-[#FFFD82] font-bold px-[3.5em] w-full lg:w-fit text-[1.4rem] py-[0.5em]"
            >
              Join now
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          ref={imageRef}
          style={{
            rotate: rotateImageEffect,
            right: FadeOutImageEffect,
            filter: `blur(${bluredCustomState}px)`,
            opacity: opacityEffect,
          }}
          className="right-side h-fit hidden lg:block relative w-[35%] mx-auto lg:mx-0 "
        >
          <div className="overflow-hidden relative w-fit">
            <img src={landingGirlImg} alt="" />
            {/* <div className="bg-[white] h-[100px] bottom-[-10px] right-[-10px] w-[50%] max-w-[350px] rounded-[29px] absolute z-[2]"></div> */}
          </div>
          <img
            className="absolute z-[2] top-0 left-[-40px]"
            src={subPhoto1}
            alt=""
          />

          <img
            className="absolute z-[2] bottom-[-50px] right-[-100px] w-[70%] max-w-[350px]"
            src={subPhoto2}
            alt=""
          />
          <img
            className="absolute z-[2] top-[-30px] w-[30%] right-[-20px]"
            src={subPhoto3}
            alt=""
          />
          <img
            className="absolute z-[2] bottom-[-30px] w-[60%] left-[-50px]"
            src={subPhoto4}
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        ref={cardsRef}
        style={{ opacity: opacityEffectCards, x: cardsFadeout }}
        className="flex flex-col container-landing relative mx-auto gap-4 lg:flex-row  justify-center"
      >
        <motion.div className="flex items-stretch flex-col relative md:flex-row  gap-[20px] justify-between w-full lg:w-[46%]">
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ delay: 1.3 }}
            style={{ margin: 0 }}
            className="bg-white rounded-lg flex flex-col items-center justify-center w-full text-center py-[0.8em] px-[1em]  "
          >
            <p style={{ margin: 0 }} className="text-[#4C6CA6] font-[700]">
              +150 Lessons
            </p>
            <p
              style={{ margin: 0 }}
              className="text-[1rem] text-[#2E2E2E] font-[500]"
            >
              Check the latest lessons
            </p>
          </motion.div>
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ delay: 1.55 }}
            style={{ margin: 0 }}
            className="bg-white rounded-lg flex flex-col items-center justify-center w-full text-center py-[0.8em] px-[1em]  "
          >
            <p style={{ margin: 0 }} className="text-[#4C6CA6] font-[700]">
              24 hour Learning
            </p>
            <p
              className="text-[1rem] text-[#2E2E2E] font-[500]"
              style={{ margin: 0 }}
            >
              Join the class at any time
            </p>
          </motion.div>
        </motion.div>
        <motion.div className="flex items-stretch flex-col relative md:flex-row gap-[20px] justify-between w-full lg:w-[46%]">
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ delay: 1.75 }}
            style={{ margin: 0 }}
            className="bg-white rounded-lg flex flex-col items-center justify-center w-full text-center py-[0.8em] px-[1em] "
          >
            <p style={{ margin: 0 }} className="text-[#4C6CA6] font-[700]">
              Without lemitations
            </p>
            <p
              className="text-[1rem] text-[#2E2E2E] font-[500]"
              style={{ margin: 0 }}
            >
              For online learning
            </p>
          </motion.div>
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ delay: 2.1 }}
            style={{ margin: 0 }}
            className="bg-white rounded-lg flex flex-col items-center justify-center w-full text-center py-[0.8em] px-[1em] "
          >
            <p style={{ margin: 0 }} className="text-[#4C6CA6] font-[700]">
              +20 Subjects
            </p>
            <p
              className="text-[1rem] text-[#2E2E2E] font-[500]"
              style={{ margin: 0 }}
            >
              Different Subjects
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
