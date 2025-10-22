import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL;

const ScheduleMatch = () => {
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();
  const matchScheduleToast = () => toast("Match scheduled successfully",{
    position: "top-center",
    autoClose: 1000
  });

  async function submitHandler(e) {
    e.preventDefault();
    if (!team1 || !team2 || !date) {
      alert("Please fill all the fields");
      return;
    }

    fetch(`${API_URL}/creatematch`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ team1, team2, date }),
      credentials: "include",
    })
      .then((data) => data.json())
      .then(()=>{
        matchScheduleToast();
        setTimeout(() => navigate("/"), 1500);
      });
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-700">
          Create Match
        </h1>

        <form className="space-y-4" onSubmit={submitHandler}>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Team 1
            </label>
            <input
              type="text"
              placeholder="Enter first team name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={(e) => setTeam1(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Team 2
            </label>
            <input
              type="text"
              placeholder="Enter second team name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={(e) => setTeam2(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Match Date
            </label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Create Match
          </button>
        </form>
      </div>
    </div>
  );
};

export default ScheduleMatch;
