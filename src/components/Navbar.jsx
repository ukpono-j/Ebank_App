import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="pl-5 font-[Poppins] fixed  z-30  pr-5  md:pl-[60px] md:pr-[60px] left-0   top-0 pt-4  pb-4  w-full bg-[#272726] text-white flex justify-between items-center">
      <div className="font-bold cursor-pointer  md:text-2xl text-2xl uppercase">
        <Link to="/" className="outline-none">
          SecureStream
        </Link>
        {/* 5B51FE */}
      </div>
      <div className="hidden text-[13px] md:flex space-x-6 items-center">
        <Link to="">About Us</Link>
        <Link to="">Services</Link>
        <Link to="/contact">Contact Us</Link>
        <Link
          to="/login"
          className="ml-3 flex items-center nav-btn  justify-center px-7 py-2  rounded-full text-[#fff] text-[13px] bg-[#1EA55A] border-2  border-[#1EA55A] login_btn  hover:border-2  hover:border-[#1EA55A]  hover:bg-[transparent]"
        >
          Log In
        </Link>
        <Link
          to="/register"
          className="ml-3 flex items-center nav-btn  justify-center px-7 py-2  rounded-full text-[#fff] text-[13px] bg-[transparent]  border-2  border-[#1EA55A] register_btn"
        >
          Register
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <AiOutlineMenu
          className="text-3xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
      {isMenuOpen && (
        <div className="md:hidden text-[13px]   fixed z-30 top-[72px] left-0 w-full h-full bg-[#0F1A2E] flex flex-col pl-5  pr-5  sm:pl-[60px] sm:pr-[60px] md:pl-[70px] md:pr-[70px]">
          <Link to="" className="mt-4 mb-4">
            About Us
          </Link>
          <Link to="" className="mt-4 mb-4">
            Services
          </Link>
          <Link to="/contact" className="mt-4 mb-4">
            Contact Us
          </Link>
          <Link
            to="/login"
            className="flex items-center nav-btn  justify-center px-7 py-3  rounded-full text-[#fff] text-[13px]  hover:bg-[#1EA55A] bg-[#1EA55A]"
          >
            Log In
          </Link>
          <Link
            to="/register"
            className=" flex mt-3  items-center nav-btn  justify-center px-7 py-3   rounded-full text-[#fff] text-[13px] bg-[transparent] hover:bg-[#1EA55A] border-2  border-[#1EA55A]"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
