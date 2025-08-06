import React from "react";
import { NavLink } from "react-router-dom";

function Navigations() {
  const teams = [
    { name: "Homepage", path: "/" },
    { name: "Badshah XI", path: "/team/badshahxi" },
    { name: "Zulfiqar Strikers", path: "/team/zulfiqarstrikers" },
    { name: "Maskedih Super Kings", path: "/team/maskedihsuperkings" },
    { name: "Maskedih Mavericks", path: "/team/maskedihmavericks" },
    { name: "Maskedih Warriors", path: "/team/maskedihwarriors" },
    { name: "Samurai XI", path: "/team/samuraixi" },
    { name: "Maskedih Strikers", path: "/team/maskedihstrikers" },
    { name: "RSIIXI", path: "/team/rsiixi" },
  ];

  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-center text-cyan-600 mb-4">
        Teams Navigation
      </h1>
      <nav className="bg-orange-100 border border-orange-200 rounded-lg p-4">
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {teams.map((team, index) => (
            <li key={index}>
              <NavLink
                to={team.path}
                className={({ isActive }) =>
                  `block px-4 py-2 text-center rounded-md font-medium transition duration-200 ${
                    isActive
                      ? "bg-red-300 text-white shadow-md"
                      : "hover:bg-orange-200 text-gray-700"
                  }`
                }
              >
                {team.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navigations;
