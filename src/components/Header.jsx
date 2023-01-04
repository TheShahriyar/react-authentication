import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center py-4 bg-gray-100 mb-6">
      <NavLink to="/" className="mx-4 px-5">
        Google Login
      </NavLink>
      <NavLink to="/form-login" className="mx-4 px-5">
        Form Login
      </NavLink>
    </div>
  );
};

export default Header;
