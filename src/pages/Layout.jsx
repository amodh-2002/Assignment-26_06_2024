import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="bg-orange-500">
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
