import React from "react";
import { NavLink } from "react-router-dom";
function Navigations() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-cyan-500 mb-6 p-2 rounded">
        Navigations
      </h1>
      <ol className="flex justify-evenly items-center bg-orange-100 border rounded-md flex-wrap align-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-red-300 rounded-md" : ""
          }
        >
          <li>Homepage</li>
        </NavLink>
        <NavLink
          to="/badshahXI"
          className={({ isActive }) =>
            isActive ? "bg-red-300 rounded-md shadow-md shadow-gray-500" : ""
          }
        >
          <li className="text-center">Badshah XI</li>
        </NavLink>
        <NavLink
          to="/zulfiqarstrikers"
          className={({ isActive }) =>
            isActive ? "bg-red-300 rounded-md shadow-md shadow-gray-500" : ""
          }
        >
          <li className="text-center">Zulfiqar Strikers</li>
        </NavLink>
        <NavLink
          to="/maskedihsuperkings"
          className={({ isActive }) =>
            isActive ? "bg-red-300 rounded-md shadow-md shadow-gray-500" : ""
          }
        >
          <li className="text-center">Maskedih Super Kings</li>
        </NavLink>
        <NavLink
          to="/maskedihmavericks"
          className={({ isActive }) =>
            isActive ? "bg-red-300 rounded-md shadow-md shadow-gray-500" : ""
          }
        >
          <li className="text-center">Maskedih Mavericks</li>
        </NavLink>
        <NavLink
          to="/maskedihwarriors"
          className={({ isActive }) =>
            isActive ? "bg-red-300 rounded-md shadow-md shadow-gray-500" : ""
          }
        >
          <li className="text-center">Maskedih Warriors</li>
        </NavLink>
        <NavLink
          to="/samuraiXI"
          className={({ isActive }) =>
            isActive ? "bg-red-300 rounded-md shadow-md shadow-gray-500" : ""
          }
        >
          <li className="text-center">Samurai XI</li>
        </NavLink>
        <NavLink
          to="/maskedihstrikers"
          className={({ isActive }) =>
            isActive ? "bg-red-300 rounded-md shadow-md shadow-gray-500" : ""
          }
        >
          <li className="text-center">Maskedih Strikers</li>
        </NavLink>
        <NavLink
          to="/rsiiXI"
          className={({ isActive }) =>
            isActive ? "bg-red-300 rounded-md shadow-md shadow-gray-500" : ""
          }
        >
          <li className="text-center">RSIIXI</li>
        </NavLink>
      </ol>
    </div>
  );
}

export default Navigations;
