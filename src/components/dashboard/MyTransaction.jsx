import React, { useState, useEffect } from "react";
import QrScanner from "react-qr-scanner";
import QRCode from "qrcode.react";
import "./myTransaction.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const MyTransaction = () => {
  const [result, setResult] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [isScanned, setIsScanned] = useState(false);
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [facingMode, setFacingMode] = useState("environment");

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
        setUserId(response.data);
      });
  }, []);

  const handleError = (err) => {
    console.error(err);
  };

  const handleScan = (data) => {
    if (data) {
      // QR code data is available
      setResult(data);
      setIsScanned(true);
      setShowCamera(false); // Turn off the camera
    }
  };

  const navigateToTransaction = () => {
    if (result) {
      // Assuming the QR code data contains the user details and a unique identifier like userId
      const userId = result; // Extract the relevant information from the QR code data

      // Use the userId to navigate to the "/transaction" route
      navigate(`/transaction/${userId}`);
    }

    // Set showCamera to true to activate the camera for the next scan
    setShowCamera(true);
    setIsScanned(false);
  };

  const cancelScan = () => {
    setShowCamera(false);
    setIsScanned(false);
    setResult(null);
  };

  const toggleFacingMode = () => {
    setFacingMode((prevFacingMode) =>
      prevFacingMode === "environment" ? "user" : "environment"
    );
  };


  function calculateQRCodeSize() {
    // Calculate the size based on a percentage of the container's width
    const containerWidth = window.innerWidth; // You may need to adjust this depending on your layout
    const percentage = calculatePercentageBasedOnScreenWidth();
    const size = (containerWidth * percentage) / 100;

    // Ensure the size is within a reasonable range (e.g., between 100 and 400 pixels)
    return Math.min(Math.max(size, 100), 400);
  }

  function calculatePercentageBasedOnScreenWidth() {
    // Adjust these breakpoints and percentages based on your design requirements
    if (window.innerWidth >= 768) {
      // Large screens
      return 80;
    } else {
      // Small screens (e.g., mobile)
      return 56;
    }
  }

  return (
    <div className="font-[Poppins] flex flex-col items-center justify-center   text-[#E4E4E4] md:pl-20 pl-4 bg-[#272726] min-h-[100vh] pr-4 md:pr-20 pt-0   pb-20">
      {/* Display User's Unique QR Code */}
      {showCamera ? null : (
        <div className="user-qr-code">
          <QRCode
            value={userId}
            size={calculateQRCodeSize()}
            className="rounded-3xl"
          />
        </div>
      )}

      {/* QR Code Scanner */}
      {showCamera && (
        <QrScanner
          onError={handleError}
          onScan={handleScan}
          facingMode={facingMode}
          style={{ width: "100%" }}
        />
      )}

      {/* Scan and Cancel Buttons */}
      <div className="scan-buttons flex items-center justify-center ">
        <button
          onClick={navigateToTransaction}
          className="scan-button md:text-[16px] text-[12px]"
          disabled={isScanned}
        >
          Scan QR Code
        </button>
        {showCamera && (
          <button onClick={cancelScan} className="cancel-button md:text-[16px] text-[12px]">
            Cancel
          </button>
        )}
          {showCamera && (
          <button onClick={toggleFacingMode} className="rotate-camera-button md:text-[16px] text-[12px]">
            Rotate Camera
          </button>
        )}
      </div>

      {/* Display QR Code Data */}
      {result && (
        <div className="qr-code-data">
          <h3>QR Code Data:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default MyTransaction;
