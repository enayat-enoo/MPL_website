import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL

const ScoreBoard = () => {
  const [runs, setRuns] = useState(0);
  const [wicket, setWickets] = useState(0);
  const [ball, setBall] = useState(0);
  const [over, setOver] = useState(0);
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");

  const {matchId} = useParams();

 useEffect(() => {

  if(!matchId) return;

  const socket = io(API_URL);
  socket.emit('joinMatch', {matchId});

  socket.on("liveScore", (data) => {
    console.log(data)
    setRuns(data.runs); 
    setOver(data.overs);
    setWickets(data.wickets);
    setBall(data.balls);
    setTeam1(data.team1);
    setTeam2(data.team2);
  });

   
    return () => {
      socket.off("score");
    };
  }, [matchId,runs,wicket,ball,over]); 

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          {team1} vs {team2}
        </h1>
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
