import React, { useState, useEffect } from "react";
import "./About.css";
import Test from "../../assets/money3.png";
import AboutImage from "../../assets/about.png";
import AboutImage2 from "../../assets/look.jpg";
import { Link } from "react-router-dom";

const About = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsScrolling(true);
        } else {
          setIsScrolling(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="about"
      className={`w-[100%] pt-14  text-[#fff]  md:pl-20 pl-5 md:pb-14  pr-5  md:pr-20 justify-between h-[auto] flex md:flex-row  flex-col-reverse  items-center ${
        isScrolling ? "fade-in" : "fade-out"
      }`}
    >
      <div
        className={`md:w-[50%] md:text-start text-center   m-4 w-[100%] font-[Poppins] fade_right  h-[auto] ${
          isScrolling ? "slide-in-right" : "slide-out-right"
        }`}
      >
        {/* <h3 className="text-[16px]">Who We Are</h3> */}
        <h1 className="font-bold  md:text-[60px] md:leading-[60px] leading-[50px]  text-[44px]  pt-1">
           Discover the SecureStream Advantage
        </h1>
        <p className=" text-[14px] md:text-[15px] mt-7  leading-[22px]">
          Welcome to SecureStream E-Bank, where innovation meets security to
          redefine your banking experience. At SecureStream, we believe in
          providing a seamless and secure platform that empowers you to manage
          your finances with confidence.
        </p>
        <div className="flex md:justify-start justify-center">
        <Link
          to="/register"
          className="mt-5 w-[200px]  flex items-center nav-btn  justify-center px-7 py-3  rounded-full text-[#fff] text-[14px] bg-[#1EA25B] border-2  border-[#1EA25B] login_btn  hover:border-2  hover:border-[#1EA25B]  hover:bg-[transparent]"
        >
          Get Started now
        </Link>
        </div>

      </div>
      <div
        className={`sm:w-[48%]  flex items-center justify-between    fade_left  h-[auto] ${
          isScrolling ? "slide-in-left" : "slide-out-left"
        }`}
      >
        <div className=" md:w-[100%] md:h-[500px] w-[100%] sm:w-[100%]  relative z-10  md:mr-[-100px] mr-[-120px] mb-[70px] mt-[30px] about_img ">
          <img
            src={AboutImage2}
            alt=""
            className="w-[90%] h-[100%] rounded-[50px]  object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
