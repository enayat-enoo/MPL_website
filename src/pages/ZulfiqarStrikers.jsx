import React from "react";
import Navigations from "../components/Navigations";

const players = [
  { name: "Tanweer Alam", image: "/images.jpg" },
  { name: "Taslim Ansari", image: "/images.jpg" },
  { name: "Hasnain Akram", image: "/images.jpg" },
  { name: "Taslim Razzaque Ansari", image: "/images.jpg" },
  { name: "Saddam Hussain", image: "/images.jpg" },
  { name: "Adil Ansari", image: "/images.jpg" },
  { name: "Sahid Farid", image: "/images.jpg" },
  { name: "Faizan Ansari", image: "/images.jpg" },
  { name: "Meraj Ansari", image: "/images.jpg" },
  { name: "Hassan Ansari", image: "/images.jpg" },
  { name: "Alim Uddin", image: "/images.jpg" },
  { name: "Nawedul Hassan", image: "/images.jpg" },
  { name: "Minhaj Ansari", image: "/images.jpg" },
  { name: "Kaif Ansari", image: "/images.jpg" },
  { name: "Ezaz Ansari", image: "/images.jpg" },
];

function ZulfiqarStrikers() {
  return (
    <div className="p-4 bg-white">
      <Navigations />
      <img src="./assets/zulfiqarstrikers.png" alt="" className="h-20 mx-auto rounded-full" />
      <h1 className="text-3xl font-bold text-center text-green-600 mb-6 p-2 rounded font-mono">
        Zulfiqar Strikers
      </h1>
       <div className=" p-2 m-2 flex items-center flex-wrap justify-between">
        <div className="rounded-md p-2 shadow-md shadow-gray-500">Matches Played : 4</div>
        <div className="rounded-md p-2 shadow-md shadow-gray-500">Matches Won : 3</div>
        <div className="rounded-md p-2 shadow-md shadow-gray-500">Total Points : 6</div>
        <div className="rounded-md p-2 shadow-md shadow-gray-500">Position in Points Table: 1
        </div>
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
            <h3 className="text-lg font-semibold text-cyan-700 ">
              {player.name}
            </h3>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default ZulfiqarStrikers;
