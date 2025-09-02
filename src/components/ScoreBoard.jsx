import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const API_URL = import.meta.env.VITE_API_URL

const socket = io(API_URL);

const ScoreBoard = () => {
  const [runs, setRuns] = useState(0);
  const [wicket, setWickets] = useState(0);
  const [ball, setBall] = useState(0);
  const [over, setOver] = useState(0);

  useEffect(() => {
    
    socket.on("score", (data) => {
      console.log(data);
      setRuns(()=>data.runs); 
      setOver(()=>data.overs);
      setWickets(()=>data.wickets);
      setBall(()=>data.balls);
    });

   
    return () => {
      socket.off("score");
    };
  }, []); 

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">🏏 Live Scoreboard</h1>
        <p className="text-2xl font-semibold text-gray-800">
          Runs: <span className="text-green-600">{runs}</span>
        </p>
        <p className="text-xl font-semibold text-gray-800">
          Wickets : {wicket}
        </p>
        <p className="text-xl font-semibold text-gray-800" >
          Overs : {`${over}.${ball}`}
        </p>
      </div>
    </div>
  );
};

export default ScoreBoard;
