import React from "react";

const players = [
  { name: "Fahim Ansari", image: "/images.jpg" },
  { name: "Nasimul Raza", image: "/images.jpg" },
  { name: "Alam Ansari", image: "/images.jpg" },
  { name: "Asif Raza", image: "/images.jpg" },
  { name: "Deepak Kumar", image: "/images.jpg" },
  { name: "Fayum Ansari", image: "/images.jpg" },
  { name: "Happy", image: "/images.jpg" },
  { name: "Hassan Raza", image: "/images.jpg" },
  { name: "Manzar Ali", image: "/images.jpg" },
  { name: "Raees Ansari", image: "/images.jpg" },
  { name: "Riyaj Ansari", image: "/images.jpg" },
  { name: "Shamim Ansari", image: "/images.jpg" },
  { name: "Sohail Ansari", image: "/images.jpg" },
  { name: "Sibtain Raza", image: "/images.jpg" },
  { name: "Tanweer Hasan", image: "/images.jpg" },
  { name: "Tousif Raza", image: "/images.jpg" },
];

function BadshahXI() {
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

export default BadshahXI;

