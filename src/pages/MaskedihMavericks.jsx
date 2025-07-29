import React from "react";

const players = [
  { name: "Abdul Matin", image: "/images.jpg" },
  { name: "Gulam Ansari", image: "/images.jpg" },
  { name: "Imran Ansari", image: "/images.jpg" },
  { name: "Majid Alam", image: "/images.jpg" },
  { name: "Nishar Ahmad", image: "/images.jpg" },
  { name: "Sabir Ali", image: "/images.jpg" },
  { name: "Sadaqat Hussain", image: "/images.jpg" },
  { name: "Shamim Ansari", image: "/images.jpg" },
  { name: "Sarfaraj Ahmad", image: "/images.jpg" },
  { name: "Sarfuddin Ansari", image: "/images.jpg" },
  { name: "Shahid", image: "/images.jpg" },
  { name: "Sohail Ansari", image: "/images.jpg" },
  { name: "Tanweer Ansari", image: "/images.jpg" },
];

function MaskedihMavericks() {
  return (
    <div className="p-4 bg-white">
       <img src="./public/assets/maskedihmavericks.jpeg" alt="" className="h-20 mx-auto rounded-full" />
      <h1 className="text-3xl font-bold text-center text-cyan-500 mb-6 p-2 rounded">
        Maskedih Mavericks
      </h1>
      <div className=" p-2 m-2 flex items-center flex-wrap justify-between">
        <div className="rounded-md p-2 shadow-md shadow-gray-500">Matches Played : 3</div>
        <div className="rounded-md p-2 shadow-md shadow-gray-500">Matches Won : 2</div>
        <div className="rounded-md p-2 shadow-md shadow-gray-500">Total Points : 4</div>
        <div className="rounded-md p-2 shadow-md shadow-gray-500">Position in Points Table: 5</div>
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

export default MaskedihMavericks;

