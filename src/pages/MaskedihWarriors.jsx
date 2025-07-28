import React from "react";

const players = [
  { name: "Anish Raza", image: "/images.jpg" },
  { name: "Fadaul Hasan", image: "/images.jpg" },
  { name: "Imran Nazir", image: "/images.jpg" },
  { name: "Israfil Ansari", image: "/images.jpg" },
  { name: "Md Anis", image: "/images.jpg" },
  { name: "Md Istiyaq Ansari", image: "/images.jpg" },
  { name: "Md Shahbaz", image: "/images.jpg" },
  { name: "Naushad Alam", image: "/images.jpg" },
  { name: "Parwez Alam", image: "/images.jpg" },
  { name: "Riyaz Warsi", image: "/images.jpg" },
  { name: "Sadaqat Alam", image: "/images.jpg" },
  { name: "Saddam Ansari", image: "/imagesl.jpg" },
  { name: "Sanir Ahmad", image: "/images.jpg" },
  { name: "Seraj", image: "/images.jpg" },
  { name: "Shoaib Akhtar", image: "/images.jpg" },
  { name: "Sohail Ansari", image: "/images.jpg" },
  { name: "Sohail Ansari", image: "/images.jpg" },
  { name: "Wazid Ansari", image: "/images.jpg" },
];

function MaskedihWarriors() {
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

export default MaskedihWarriors;

