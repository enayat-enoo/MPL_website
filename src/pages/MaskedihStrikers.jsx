import React from "react";

const players = [
  { name: "Ahmad Raza", image: "/images.jpg" },
  { name: "Akram Ansari", image: "/images.jpg" },
  { name: "Alok Rana", image: "/images.jpg" },
  { name: "Aslam Ansari", image: "/images.jpg" },
  { name: "Azhar Ansari", image: "/images.jpg" },
  { name: "Ghulam Sarwar", image: "/images.jpg" },
  { name: "Hasnen Raza", image: "/images.jpg" },
  { name: "Irshad Alam", image: "/images.jpg" },
  { name: "Md Kaif", image: "/images.jpg" },
  { name: "Raza Akram", image: "/images.jpg" },
  { name: "Nishar Ansari", image: "/images.jpg" },
  { name: "Roushan Ali", image: "/images.jpg" },
  { name: "Rustum Ansari", image: "/images.jpg" },
  { name: "Shahnawaz Ansari", image: "/images.jpg" },
  { name: "Shankar Rana", image: "/images.jpg" },
];

function MaskedihStrikers() {
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

export default MaskedihStrikers;

