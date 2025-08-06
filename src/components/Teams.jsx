import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigations from "./Navigations";
import PageNotFound from "../pages/PageNotFound";

function Teams() {
  const [team, setTeam] = useState(null);
  const { teamId } = useParams();

  useEffect(() => {
    fetch("https://mpl-backend-ct21.onrender.com")
      .then((res) => res.json())
      .then((data) => setTeam(data.find((team) => team.id === teamId)))
      .catch((error) => console.error("Error fetching data:", error));
  }, [teamId]);

  if (!team) return <PageNotFound />;

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <Navigations />

      {/* Team Logo */}
      <div className="flex justify-center mb-6">
        <img
          src={`./assets/${team.id}.jpeg`}
          alt={`${team.name} Logo`}
          className="h-24 w-24 rounded-full border-4 border-cyan-400 shadow-md object-cover"
        />
      </div>

      {/* Team Name */}
      <h1 className="text-4xl font-bold text-center text-cyan-600 mb-6">
        {team.name}
      </h1>

      {/* Match Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
        <StatCard label="Matches Played" value="3" />
        <StatCard label="Matches Won" value="2" />
        <StatCard label="Total Points" value="4" />
        <StatCard label="Position in Points Table" value="5" />
      </div>

      {/* Squad Section */}
      <h2 className="text-3xl font-semibold text-center text-blue-500 mb-6 font-serif">
        Squad
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {team?.players?.map((player, index) => (
          <div
            key={index}
            className="bg-slate-100 hover:bg-slate-200 border border-cyan-400 rounded-xl shadow-lg hover:shadow-xl transition duration-300 w-60 p-4 text-center"
          >
            <img
              src={player.image || "https://via.placeholder.com/150"}
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

function StatCard({ label, value }) {
  return (
    <div className="bg-cyan-50 text-center p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-xl font-bold text-cyan-700">{value}</p>
    </div>
  );
}

export default Teams;
