import React from "react";

const players = [
  { name: "Aamir Sohail", image: "/images.jpg" },
  { name: "Arbaaz Ansari", image: "/images.jpg" },
  { name: "Aslam", image: "/images.jpg" },
  { name: "Arshad Ansari", image: "/images.jpg" },
  { name: "Khwaja Akram", image: "/images.jpg" },
  { name: "Jasim Ansari", image: "/images.jpg" },
  { name: "Md Hedayat", image: "/images.jpg" },
  { name: "Md saif", image: "/images.jpg" },
  { name: "Md Saifulla", image: "/images.jpg" },
  { name: "Miraz", image: "/images.jpg" },
  { name: "Shadab Ansari", image: "/images.jpg" },
  { name: "Sahil Raza", image: "/images.jpg" },
  { name: "Shahnawaz Hussain", image: "/images.jpg" },
  { name: "Zishan Akram", image: "/images.jpg" },
  { name: "Taukir Akam", image: "/images.jpg" },
];

function SamuraiXI() {
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

export default SamuraiXI;


