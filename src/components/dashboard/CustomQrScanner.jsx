// CustomQrScanner.jsx

import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
  useState,
} from "react";
import QrScanner from "react-qr-scanner";

const CustomQrScanner = forwardRef((props, ref) => {
  const scannerRef = useRef(null);
  const [hasRearCamera, setHasRearCamera] = useState(true); // Default to true, update on mount

  const checkCameraDevices = async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const rearCamera = devices.find(
        (device) =>
          device.kind === "videoinput" && device.label.includes("back")
      );

      return rearCamera;
    } catch (error) {
      console.error("Error checking camera devices:", error);
      return null;
    }
  };


  useEffect(() => {
    checkCameraDevices().then((rearCamera) => {
      if (!rearCamera) {
        console.log("No rear camera found.");
        setHasRearCamera(false);
      }
    });
  }, []); // Run only once on mount

  useImperativeHandle(ref, () => ({
    reset: () => scannerRef.current?.instance?.restart(),
    // toggleCamera: async () => {
    //   try {
    //     if (!hasRearCamera) {
    //       console.log('No rear camera available for toggling.');
    //       return;
    //     }

    //     const rearCamera = await checkCameraDevices();
    //     if (rearCamera && scannerRef.current?.instance) {
    //       const currentFacingMode = scannerRef.current?.state?.facingMode;
    //       const newFacingMode = currentFacingMode === 'user' ? 'environment' : 'user';

    //       scannerRef.current.instance.stop();
    //       scannerRef.current.instance.start(newFacingMode);
    //     } else {
    //       console.log('No rear camera to toggle.');
    //     }
    //   } catch (error) {
    //     console.error('Error toggling camera:', error);
    //   }
    // },
    toggleCamera: async () => {
      try {
        if (!hasRearCamera) {
          console.log("No rear camera available for toggling.");
          return;
        }

        const rearCamera = await checkCameraDevices();
        if (rearCamera && scannerRef.current?.instance) {
          const currentFacingMode = scannerRef.current?.state?.facingMode;
          const newFacingMode =
            currentFacingMode === "user" ? "environment" : "user";

          scannerRef.current.instance.stop();
          scannerRef.current.instance.start(newFacingMode, (err) => {
            if (err) {
              console.error("Error starting scanner:", err);
            }
          });
        } else {
          console.log("No rear camera to toggle.");
        }
      } catch (error) {
        console.error("Error toggling camera:", error);
      }
    },
  }));

  return <QrScanner ref={scannerRef} {...props} />;
});

export default CustomQrScanner;

// ;;;;
