import React from "react";
import { Link } from "react-router-dom";
import Vesa from "../../assets/vesa.png";
import Card from "../../assets/card.png";
import Girl from "../../assets/about.png";
import "./ServicesComponent.css";

const ServicesComponent = () => {
  return (
    <div className="h-[auto]    sm:pl-14  pl-5  pr-5  sm:pr-14  pt-20 pb-20 text-[#FEFEFF] font-[Poppins] w-[100%]">
      <div className="h-[auto]">
        <div className="service_title m-auto sm:text-[46px] text-[40px] md:w-[600px] text-center font-[900] sm:leading-[60px] leading-[45px]">
          Why Choose SecureStream eBanking?
        </div>
        {/* === buyer */}
        <div className="sm:w-[90%] md:w-[80%]   h-[auto] sm:mt-16 mt-14  md:flex items-center justify-between  mb-6 ml-auto mr-auto">
          <div className=" md:w-[380px] h-[auto] flex flex-col md:items-start items-center md:text-start text-center">
            <h1 className="font-bold text-[34px]">Secure and Reliable</h1>
            <p className="text-[15px] mt-2 ">
              Your security is our priority. Rest assured that your transactions
              and personal information are protected with advanced encryption
              technology.
            </p>
            <Link
              to="/register"
              className="mt-5  flex items-center nav-btn  justify-center px-7 py-3  rounded-full text-[#fff] text-[14px] bg-[#1EA25B] border-2  border-[#1EA25B] login_btn  hover:border-2  hover:border-[#1EA25B]  hover:bg-[transparent]"
            >
              Get Started now
            </Link>
          </div>
          <div className="rounded-3xl flex  justify-center   moving   md:mt-0 mt-9  md:w-[470px] h-[auto] ">
            <img src={Card} alt="" className="sm:w-[100%] w-[80%]" />
          </div>
        </div>
        {/* ========== Seller */}
        <div className="sm:w-[90%] md:w-[80%]  h-[auto] mt-20    flex md:flex-row  flex-col-reverse items-center justify-between  mb-6 ml-auto mr-auto">
          <div className="rounded-3xl flex  justify-center   md:mt-0 mt-14  moving  md:w-[540px] h-[auto] ">
            <img src={Girl} alt="" className="w-[90%]" />
          </div>
          <div className=" md:w-[380px] h-[auto] flex flex-col md:items-start items-center md:text-start text-center">
            <h1 className="font-bold text-[34px]">User-Friendly Interface:</h1>
            <p className="text-[15px] mt-2 ">
              Our intuitive interface is designed for easy navigation, ensuring
              a seamless user experience for both beginners and experienced
              online users.
            </p>
            <Link
              to="/register"
              className="mt-5  flex items-center nav-btn  justify-center px-7 py-3  rounded-full text-[#fff] text-[14px] bg-[#1EA25B] border-2  border-[#1EA25B] login_btn  hover:border-2  hover:border-[#1EA25B]  hover:bg-[transparent]"
            >
              Get Started now
            </Link>
          </div>
        </div>
        {/* ======== Fraud Protection */}
        <div className="sm:w-[90%] md:w-[80%]  h-[auto] mt-20   md:flex items-center justify-between  mb-6 ml-auto mr-auto">
          <div className=" md:w-[300px] h-[auto] flex flex-col md:items-start items-center md:text-start text-center">
            <h1 className="font-bold text-[34px]">
              Convenience at Your Fingertips
            </h1>
            <p className="text-[15px] mt-2 ">
              Bank conveniently from the comfort of your home, office, or while
              you're on the go. Manage your finances whenever and wherever you
              want.
            </p>
            <Link
              to="/register"
              className="mt-5  flex items-center nav-btn  justify-center px-7 py-3  rounded-full text-[#fff] text-[14px] bg-[#1EA25B] border-2  border-[#1EA25B] login_btn  hover:border-2  hover:border-[#1EA25B]  hover:bg-[transparent]"
            >
              Get Started now
            </Link>
          </div>
          <div className="rounded-3xl flex  justify-center   md:mt-0 mt-9 moving   md:w-[470px] h-[400px] ">
            <img
              src={Vesa}
              alt=""
              className=" h-[100%]  w-[100%] object-cover object-center bottom relative  rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
