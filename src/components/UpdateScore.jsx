import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const API_URL = import.meta.env.VITE_API_URL;
let socket; // define outside to avoid multiple connections

const UpdateScore = () => {
  const [score, setScore] = useState(0);
  const [over, setOver] = useState(0);
  const [ball, setBall] = useState(1);
  const scores = [0, 1, 2, 3, 4, 5, 6];

  useEffect(() => {
    socket = io(API_URL);


     socket.on("score", (data) => {
      console.log("Received score:", data);
      setScore(data.runs);
      setOver(data.Overs);
      setBall(data.balls);
    });

    return () => {
      socket.disconnect(); 
    };
  }, []);

  function scoreHandler(e) {
    const run = Number(e.target.value);

    let newBall = ball + 1;
    let newOver = over;

    if (newBall === 7) {
      newOver = over + 1;
      newBall = 1;
    }
    setScore(() => run); 
    setBall(newBall);
    setOver(newOver);

    const data = {
      runs: run,
      over: newOver,
      balls: ball==6 ? 0 : ball,
    };
    socket.emit("score", data); 
  }

  return (
    <>
      <div className="p-6 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
          Runs
        </h1>

        {/* Score Buttons */}
        <div className="flex justify-center items-center gap-3 p-6 border-2 border-gray-300 rounded-lg bg-gray-50 shadow-md flex-wrap">
          {scores.map((num) => (
            <button
              key={num}
              value={num}
              onClick={scoreHandler}
              className={`h-12 w-12 rounded-md border font-semibold transition duration-200 
              ${
                score === num
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-800 border-gray-400 hover:bg-blue-100"
              }`}
            >
              {num}
            </button>
          ))}
        </div>

        {/* Show Selected Score */}
        {score !== null && (
          <div className="mt-4 text-lg font-semibold text-gray-700">
            Selected Score: <span className="text-blue-600">{score}</span>
          </div>
        )}
      </div>
      <div className="text-center border border-zinc-950 bg-red-500 w-20 h-7 mx-auto rounded-lg">
        <button>Out</button>
      </div>
    </>
  );
};

export default UpdateScore;
