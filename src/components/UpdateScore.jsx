import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const API_URL = import.meta.env.VITE_API_URL
let socket; // define outside to avoid multiple connections

const UpdateScore = () => {
  const [score, setScore] = useState(0);
  // const [wicket,setWickets] = useState(0);
  const [over,setOver] = useState(0);
  const [ball, setBall] = useState(1);
  const scores = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    // Connect socket only once when component mounts
    socket = io(API_URL);

    return () => {
      socket.disconnect(); // cleanup on unmount
    };
  }, []);

  
  function scoreHandler(e) {
    const run = Number(e.target.value);
    setScore(()=>run);
    setBall((ball)=>{
      const newBall=ball+1;
      if(newBall>5){
        setOver((over)=>over+1);
        return 0;
      }
      else{
        return ball+1;
      }
    });
   
    const data = {
      runs : run,
      over : over,
      balls : ball
    }
    console.log(data);
    socket.emit("score", data); // emit only when clicked
  }

  const handleOutClick = () => {
    // setWickets((wicket)=>wicket+1);
    // const data = {
    //   runs : run,
    //   wicket : wicket,
    //   over : over
    // }
    // socket.emit("score", data);
  };

  return (
    <>
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">Runs</h1>

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
        <button onClick={handleOutClick}>Out</button>
    </div>
    </>
  );
};

export default UpdateScore;
