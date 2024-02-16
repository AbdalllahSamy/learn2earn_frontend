import React from "react";

import IntroPage from "./IntroPage";
import Learn2EarnCyclePage from "./Learn2EarnCyclePage";
import WhyUs from "./WhyUs";
import TopInstructors from "./TopInstructors";
import TopStudents from "./TopStudents";
import Contact from "./Contact";
import LandingNavBar from "./LandingNavBar";
import Footer from "./Footer";
export default function LandingPage() {
  return (
    <div className="min-h-[100vh]">
      <LandingNavBar />
      <IntroPage />
      <Learn2EarnCyclePage />
      <WhyUs />
      <TopInstructors />
      <TopStudents />
      <Contact />
      <Footer />
    </div>
  );
}
