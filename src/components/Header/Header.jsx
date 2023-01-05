import React from "react";
import { NavLink } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Header = () => {
  const { user, handleSignOut } = useFirebase();

  return (
    <div className="flex justify-center items-center py-4 bg-gray-100 mb-6">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-red-500 mx-4 text-lg font-medium"
            : "text-black mx-4 text-lg font-medium"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive
            ? "text-red-500 mx-4 text-lg font-medium"
            : "text-black mx-4 text-lg font-medium"
        }
      >
        Products
      </NavLink>
      <NavLink
        to="/reviews"
        className={({ isActive }) =>
          isActive
            ? "text-red-500 mx-4 text-lg font-medium"
            : "text-black mx-4 text-lg font-medium"
        }
      >
        Reviews
      </NavLink>
      <NavLink
        to="/orders"
        className={({ isActive }) =>
          isActive
            ? "text-red-500 mx-4 text-lg font-medium"
            : "text-black mx-4 text-lg font-medium"
        }
      >
        Orders
      </NavLink>
      {user?.uid ? (
        <>
          <button
            onClick={handleSignOut}
            className="mx-4 text-lg font-medium bg-gray-800 text-white rounded-md px-8 py-2"
          >
            Sign Out
          </button>
          <div className="font-medium text-yellow-600">{user?.displayName}</div>
        </>
      ) : (
        <>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 mx-4 text-lg font-medium"
                : "text-black mx-4 text-lg font-medium"
            }
          >
            Register
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 mx-4 text-lg font-medium"
                : "text-black mx-4 text-lg font-medium"
            }
          >
            Login
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Header;
