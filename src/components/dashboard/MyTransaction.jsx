import React, { useState, useEffect, useRef } from "react";
import QrScanner from "react-qr-scanner";
import QRCode from "qrcode.react";
import "./myTransaction.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CustomQrScanner from "./CustomQrScanner";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const MyTransaction = () => {
  const [result, setResult] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [isScanned, setIsScanned] = useState(false);
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
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
        setUserId(response.data);
      });
  }, []);

  const handleError = (err) => {
    console.error(err);
  };

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      setIsScanned(true);
      setShowCamera(false);

      // Fetch scanned user details and store in state
      axios
        .get(`${BASE_URL}/user-details/${data}`)
        .then((response) => {
          setScannedUserData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching scanned user details:", error);
        });
    }
  };

  const navigateToTransaction = () => {
    if (result) {
      const userId = result;
      navigate(`/transaction/${userId}`);
    }

    setShowCamera(true);
    setIsScanned(false);
  };

  const cancelScan = () => {
    setShowCamera(false);
    setIsScanned(false);
    setResult(null);
  };

  const toggleCamera = () => {
    setShowCamera(false);
    setIsScanned(false);
    setResult(null);
    // Resetting the CustomQrScanner component
    // qrScannerRef.current.instance.reset();
    qrScannerRef.current?.toggleCamera();
    setShowCamera(true);
    console.log("toggle clicked")
  };

  const calculateQRCodeSize = () => {
    const containerWidth = window.innerWidth;
    const percentage = calculatePercentageBasedOnScreenWidth();
    const size = (containerWidth * percentage) / 100;

    return Math.min(Math.max(size, 100), 400);
  };

  const calculatePercentageBasedOnScreenWidth = () => {
    if (window.innerWidth >= 768) {
      return 80;
    } else {
      return 56;
    }
  };

  return (
    <div className="font-[Poppins] flex flex-col items-center justify-center text-[#E4E4E4] md:pl-20 pl-4 bg-[#272726] min-h-[100vh] pr-4 md:pr-20 pt-0 pb-20">
      {showCamera ? null : (
        <div className="user-qr-code">
          <QRCode
            value={userId}
            size={calculateQRCodeSize()}
            className="rounded-3xl"
          />
        </div>
      )}

      {showCamera && (
        <CustomQrScanner
          ref={qrScannerRef}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
        />
      )}

      <div className="scan-buttons flex items-center justify-center ">
        <button
          onClick={navigateToTransaction}
          className="scan-button md:text-[16px] text-[12px]"
          disabled={isScanned}
        >
          Scan QR Code
        </button>
        {showCamera && (
          <button
            onClick={cancelScan}
            className="cancel-button md:text-[16px] text-[12px]"
          >
            Cancel
          </button>
        )}
        {/* {showCamera && (
          <button
            onClick={toggleCamera}
            className="rotate-camera-button md:text-[16px] text-[12px]"
          >
            Toggle Camera
          </button>
        )} */}
         {showCamera && (
        <button
          onClick={toggleCamera}
          className="rotate-camera-button md:text-[16px] text-[12px]"
          disabled={!hasRearCamera} // Disable the button if no rear camera is available
        >
          Toggle Camera
        </button>
      )}
      </div>

      {/* {result && (
        <div className="qr-code-data">
          <h3>QR Code Data:</h3>
          <p>{result}</p>
        </div>
      )} */}
      {result && (
        <div className="qr-code-data">
          <h3>QR Code Data:</h3>
          <p>{result}</p>
          {scannedUserData && (
            <div>
              <h3>Scanned User Data:</h3>
              <p>{/* Display relevant scanned user data here */}</p>
              {/* Link to the transaction page */}
              <Link to={`/transaction/${result}`}>Go to Transaction Page</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyTransaction;
