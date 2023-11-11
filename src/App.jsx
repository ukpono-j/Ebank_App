import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import UserDashboard from "./pages/UserDashboard";
import Register from "./pages/Register";
import NewTransaction from "./components/dashboard/NewTransaction";

function App() {

  return <>
      {/* <Router> */}
         <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/login"  element={<LogIn/>} />
          <Route path="/register"  element={<Register/>} />
          <Route path="/dashboard"  element={<UserDashboard/>} />
          <Route path="/transaction"  element={<NewTransaction/>} />
         </Routes>
      {/* </Router> */}
  </>;
}

export default App;
