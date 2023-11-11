import React, { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import MyTransaction from "../components/dashboard/MyTransaction";
import BottomNav from "../components/dashboard/BottomNav";

const UserDashboard = () => {
  const [showToggleContainer, setShowToggleContainer] = useState(true);
  const [showProfile, setShowProfile] = useState(false);

  const handleShowProfile = () => {
    setShowToggleContainer(false);
    setShowProfile(true);
  };

  const handleMyTransaction = () => {
    setShowToggleContainer(true);
    setShowProfile(false);
  };

  return (
    <div>
      <div className="border flex items-center border-black">
        <Sidebar
          onShowProfile={handleShowProfile}
          onShowToggleComponent={handleMyTransaction}
        />
        <div
          style={{ overflowY: "scroll" }}
          className=" layout  bg-[#272726] fixed right-0 top-0 w-[100%]  md:w-[83.2%] h-[100vh]"
        >
          <div
            className={
              showToggleContainer ? "h-[auto] toggleContainer" : "hidden"
            }
          >
            <MyTransaction />
          </div>
        </div>
        <BottomNav
          onShowProfile={handleShowProfile}
          onShowToggleComponent={handleMyTransaction}
        />
      </div>
    </div>
  );
};

export default UserDashboard;
