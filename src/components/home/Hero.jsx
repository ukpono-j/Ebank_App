import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import HeroImage from "../../assets/home.png";
import Test2 from "../../assets/money4.jpg";
import Test3 from "../../assets/money2.jpg";
import { BsFillPlayFill } from "react-icons/bs";
import { MdGroups2 } from "react-icons/md";
const Hero = () => {
  return (
    <div
      className="
     hero text-center md:text-start   md:flex items-center justify-between  md:pl-14  pl-5  pr-5  md:pr-14  md:pt-[120px] pt-[150px] pb-[120px]   h-[auto] text-[#FFF] w-[100%]"
    >
      <div className="md:w-[60%]  w-[100%]   h-[auto] pr-10 ">
        {/* <h1>Transforming Transactions, Building Trust</h1> */}
        {/* <h3 className="md:text-[16px] text-[14px]">
          Empower Your Transactions
        </h3> */}
        <h1 className="md:text-[46px] uppercase  leading-[57px]  text-[56px] ">
          {" "}
          {/* A New Era of Trust and Transparency */}
          {/* Welcome to SecureStream eBanking */}
          The Only Professionals & Secure Digital Bank
        </h1>
        
        <p className="ss">
          At SecureStream ebank, we believe in simplifying your banking
          experience. With our advanced e-banking services, managing your
          finances has never been easier. Our secure and user-friendly online
          platform allows you to access your accounts, make transactions, and
          stay in control of your finances anytime, anywhere.
        </p>
        <Link
              to="/login"
              className="mt-6  font-[Poppins] w-[230px]   flex items-center nav-btn  justify-center px-7 py-3  rounded-full text-[#fff] text-[14px] bg-[#1EA25B] border-2  border-[#1EA25B] login_btn  hover:border-2  hover:border-[#1EA25B]  hover:bg-[transparent]"
            >
              Get Started now
            </Link>
      </div>
      <div className="md:w-[50%] font-[Poppins] w-[100%]  mt-7  md:mt-0 relative  flex  h-[auto]">
        <div className="bounce rounded-xl  absolute w-[200px] h-[70px] flex items-center justify-center  bg-[#fff] m-auto z-10 top-[50%] left-[34%]">
          <div className="">
            <MdGroups2 className="text-[60px] text-[#031420]" />
          </div>
          <div className="ml-3 text-[14px] text-[#0F0821]">
            <h4>20m+</h4>
            <p>Active Users</p>
          </div>
        </div>
        <div className="w-[100%] m-4  h-[auto] hero_img_one">
          <img
            src={HeroImage}
            alt=""
            className="max-w-[80%]  moving"
          />
        </div>
        {/* <div className="w-[100%] ml-4  mr-4  mt-[100px] mb-4  h-[400px] hero_img_two">
          <img
            src={Test2}
            alt=""
            className="w-[100%] h-[100%] object-cover object-center"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
