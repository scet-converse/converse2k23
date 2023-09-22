"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const AnimationWrapper = ({ children }: any) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration="1500">
      {children}
    </div>
  );
};

export default AnimationWrapper;
