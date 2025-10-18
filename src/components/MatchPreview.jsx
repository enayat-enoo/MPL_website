import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const MatchPreview = () => {
  const [teams, setTeams] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const res = await fetch(`${API_URL}/getmatches`, {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        setTeams(data);
        console.log(data);
      } catch (err) {
        console.error("Error fetching matches:", err);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Upcoming Matches
        </h1>

        {teams.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teams.map((match, idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition"
                onClick={() => navigate(`/updatescore/${match._id}`)}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400">
                    {new Date(match.date).toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="text-sm text-gray-400">
                    {new Date(match.date).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex-1 text-right pr-4">
                    <h2 className="text-lg font-semibold">{match.firstTeam}</h2>
                  </div>

                  <span className="text-gray-400 font-bold">vs</span>

                  <div className="flex-1 text-left pl-4">
                    <h2 className="text-lg font-semibold">{match.secondTeam}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">No matches available</p>
        )}
      </div>
    </div>
  );
};

export default MatchPreview;
