import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import UserDashboard from "./pages/UserDashboard";
import Register from "./pages/Register";

function App() {

  return <>
      {/* <Router> */}
         <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/login"  element={<LogIn/>} />
          <Route path="/register"  element={<Register/>} />
          <Route path="/dashboard"  element={<UserDashboard/>} />
         </Routes>
      {/* </Router> */}
  </>;
}

export default App;
