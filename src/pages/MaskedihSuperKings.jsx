import React from "react";
import Navigations from "../components/Navigations";

const players = [
  { name: "Shakil Akhtar", image: "/images.jpg" },
  { name: "Masum Ali", image: "/images.jpg" },
  { name: "Ali Juman", image: "/images.jpg" },
  { name: "Masum Raza", image: "/images.jpg" },
  { name: "Jamir Uddin", image: "/images.jpg" },
  { name: "Nafish Ansari", image: "/images.jpg" },
  { name: "Md Raza", image: "/images.jpg" },
  { name: "Niyaj Alam", image: "/images.jpg" },
  { name: "Shahbaj Ansari", image: "/images.jpg" },
  { name: "Shahid Raza", image: "/images.jpg" },
  { name: "Sajid Haider", image: "/images.jpg" },
  { name: "Samsad Alam", image: "/images.jpg" },
  { name: "Sarfaraz Ansari", image: "/images.jpg" },
  { name: "Seraj Ansari", image: "/images.jpg" },
  { name: "Rahul Sharma", image: "/images.jpg" },
];

function MaskedihSuperKings() {
  return (
    <div className="p-4 bg-white">
      <Navigations />
      <h1 className="text-3xl font-bold text-center text-cyan-500 mb-6 p-2 rounded">
        Maskedih Super Kings
      </h1>
      <div className=" p-2 m-2 flex items-center flex-wrap justify-between">
        <div className="rounded-md p-2 shadow-md shadow-gray-500">Matches Played : 4</div>
        <div className="rounded-md p-2 shadow-md shadow-gray-500">Matches Won : 1</div>
        <div className="rounded-md p-2 shadow-md shadow-gray-500">Total Points : 2</div>
        <div className="rounded-md p-2 shadow-md shadow-gray-500">Position in Points Table: 8</div>
      </div>
      <h2 className="text-center text-2xl font-bold text-blue-400 font-serif">Squad</h2>
      <br />
      <div className="flex flex-wrap justify-center gap-6">
        {players.map((player, index) => (
          <div
            key={index}
            className="bg-white border border-cyan-400 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-60 p-4 text-center bg-slate-100 hover:bg-slate-200"
          >
            <img
              src={player.image}
              alt={player.name}
              className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-cyan-400 mb-4"
            />
            <h3 className="text-lg font-semibold text-cyan-700">
              {player.name}
            </h3>
          </div>
        ))}
      </div>
       
    </div>
  );
}

export default MaskedihSuperKings;

