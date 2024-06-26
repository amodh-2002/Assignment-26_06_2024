import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mx-auto h-16 max-w-screen-xl text-white font-bold flex justify-between items-center">
      <div>
        <Link to="/">
          <h1 className="text-2xl">MVCL</h1>
        </Link>
      </div>
      <div>
        <ul className="flex justify-between items-center gap-10">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/cards">Cards</NavLink>
          </li>
          <li>
            <NavLink to="/axios">Axios</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
