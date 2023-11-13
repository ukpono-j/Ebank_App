import React, { useState, useEffect, useRef } from "react";
import QrScanner from "react-qr-scanner";
import QRCode from "qrcode.react";
import Profile from "../../assets/look.jpg";
import "./myTransaction.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CustomQrScanner from "./CustomQrScanner";
import {
  MdAdfScanner,
  MdArrowDropDown,
  MdArrowDropUp,
  MdArrowForward,
  MdDocumentScanner,
  MdForward,
  MdHeadphones,
  MdMore,
  MdNotifications,
  MdRemoveDone,
  MdSend,
} from "react-icons/md";
import {
  PiCurrencyNgnDuotone,
  PiEyeFill,
  PiPlus,
  PiPlusCircle,
} from "react-icons/pi";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const MyTransaction = () => {
  const [result, setResult] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [isScanned, setIsScanned] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const qrScannerRef = useRef(null);
  const [hasRearCamera, setHasRearCamera] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    if (token) {
      axios.defaults.headers.common["auth-token"] = token;
    }

    // Fetch transaction details from API and update the state
    axios
      .get(`${BASE_URL}/user-details`, {
        headers: {
          "auth-token": token,
        },
      })
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  return (
    <div className="font-[Poppins]  text-[#E4E4E4] md:pl-7 sm:pl-4 pl-2 pr-2  bg-[#272726] min-h-[100vh] sm:pr-4 md:pr-7 pt-10 pb-20">
      {user && (
        <>
          <div className="flex items-center  justify-between">
            <div className="flex items-center ">
              <div className="flex justify-center  items-center sm:w-[70px] w-[40px] h-[40px] sm:h-[70px] rounded-full">
                <img
                  src={Profile}
                  alt="profile_img"
                  className="w-[100%]  rounded-full"
                />
              </div>
              <div className="pl-3">
                <h1 className="sm:text-[18px] text-[15px]">
                  Hi, {user.firstName}
                </h1>
                {/* Display other user details as needed */}
                <p className="sm:text-[14px] text-[10px]"> {user.email}</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="sm:m-3 m-2  sm:text-[26px] text-[23px]">
                <MdHeadphones />
              </div>
              <div className="sm:m-3 m-2  sm:text-[26px] text-[23px]">
                <MdDocumentScanner />
              </div>
              <div className="sm:m-3 m-2  sm:text-[26px] text-[23px]">
                <MdNotifications />
              </div>
            </div>
          </div>
        </>
      )}

      <div className="rounded-2xl h-[auto] bg-[#0C0C0C] pl-4  pt-3  pr-4  pb-5  mt-7">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center text-[13px]">
            Available Balance{" "}
            <span className="pl-2">
              <PiEyeFill className="text-[20px]" />
            </span>{" "}
          </h2>
          <h2 className="flex items-center text-[13px]">
            Transaction History{" "}
            <span className="pl-1">
              <MdForward />
            </span>{" "}
          </h2>
        </div>
        <div className="mt-2">
          <h1 className="flex items-center text-[26px]">
            <span>
              <PiCurrencyNgnDuotone />
            </span>{" "}
            1000
          </h1>
        </div>
        <div className="mt-2 text-[12px]">
          <p>$ Cashback ***</p>
        </div>
        <div className="flex items-center justify-between md:pl-20 pl-3 pr-3 md:pr-20 mt-4">
          <div className="flex cursor-pointer  items-center flex-col justify-center  items-center ">
            <div className="h-[40px] bg-[#ffff]  w-[40px] rounded-xl flex items-center justify-center ">
              <PiPlusCircle className="text-[#0C0C0C] text-[20px]" />
            </div>
            <h4 className="pt-1 text-[14px]">Add money</h4>
          </div>
          <div className="flex cursor-pointer  items-center flex-col justify-center items-center ">
            <div className="h-[40px] bg-[#ffff]  w-[40px] rounded-xl flex items-center justify-center ">
              <MdSend className="text-[#0C0C0C] text-[18px]" />
            </div>
            <h4 className="pt-1 text-[14px]">Transfer</h4>
          </div>
          <div className="flex cursor-pointer  items-center flex-col justify-center items-center ">
            <div className="h-[40px] bg-[#ffff]  w-[40px] rounded-xl flex items-center justify-center ">
              <MdArrowDropDown className="text-[#0C0C0C] text-[58px]" />
            </div>
            <h4 className="pt-1 text-[14px]">Withdraw</h4>
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default MyTransaction;
