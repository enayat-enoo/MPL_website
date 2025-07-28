import React from "react";

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
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center text-cyan-500 mb-6 shadow-md shadow-cyan-300 p-2 rounded">
        Zulfiqar Strikers
      </h1>
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

export default ZulfiqarStrikers;
