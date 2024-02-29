import React from "react";

import IntroPage from "./IntroPage";
import Learn2EarnCyclePage from "./Learn2EarnCyclePage";
import WhyUs from "./WhyUs";
import TopInstructors from "./TopInstructors";
import TopStudents from "./TopStudents";
import Contact from "./Contact";
import LandingNavBar from "./LandingNavBar";
import Footer from "./Footer";
import { motion } from "framer-motion";

export default function LandingPage() {
  
  return (
    <motion.div initial= {{opacity:0, filter: `blur(${100}px)`}}
    animate = {{opacity:1 , filter: `blur(${0}px)`}}
    transition={{duration:0.5 , ease:"easeIn"}}
     className="min-h-[100vh]">
      <LandingNavBar />
      <IntroPage />
      <Learn2EarnCyclePage />
      <WhyUs />
      <TopInstructors />
      <TopStudents />
      <Contact />
      <Footer />
    </motion.div>
  );
}
