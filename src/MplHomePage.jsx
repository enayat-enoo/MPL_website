import { NavLink } from "react-router-dom";
import FixtureCard from "./components/FixtureCard";
import PointsTable from "./components/PointsTable";
import { useState } from "react";
import { useEffect } from "react";
import UserLogin from "./components/UserLogin";
import Logout from "./components/Logout";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

function MplHomePage() {
  const [teams, setTeams] = useState([]);
  const [fixtures, setFixtures] = useState([]);

  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_URL}/auth/check`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserLoggedIn(data.login);
        setUserName(data.username);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/matchdetails`, {
      method: "GET",
      credentials: "include",
    })
      .then((data) => data.json())
      .then((team) => setFixtures(team.matchData || []));
  }, []);
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);

  return (
    <>
      {userLoggedIn && (
        <h2 className="text-center text-green-600 text-2xl font-semibold">
          👋 Welcome, {userName}!
        </h2>
      )}

      <div className="flex flex-wrap w-full gap-1 justify-center ">
        <div className="rounded-lg bg-gradient-to-br from-green-200 to-green-100 p-4 shadow-xl w-80">
          <h2 className="text-xl font-bold text-green-800 mb-3 border-b border-green-500 pb-2 text-center">
            Participating Teams
          </h2>
          <ol className="space-y-2 text-left list-decimal list-inside text-sm font-medium text-center">
            {teams.map((team) => (
              <NavLink to={`/team/${team.id}`} key={team.id}>
                <li className="bg-white rounded px-2 py-1 hover:bg-green-300 hover:text-white transition shadow-sm">
                  {team.name}
                </li>
              </NavLink>
            ))}
          </ol>
        </div>

        <div className="flex-1 bg-gradient-to-br from-blue-50 to-white p-4 rounded-lg shadow-xl mx-2">
          <h2 className="text-xl font-bold text-blue-800 mb-3 border-b border-blue-400 pb-2 text-center">
            Upcoming Fixtures
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {fixtures.map((match, index) => (
              <FixtureCard
                key={index}
                team={match.firstTeam}
                opponent={match.secondTeam}
                date={match.date}
                matchid={match._id}
              />
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 p-4 shadow-xl w-80">
          <h2 className="text-xl font-bold text-purple-800 mb-3 border-b border-purple-400 pb-2 text-center">
            Points Table
          </h2>
          <PointsTable />
        </div>
      </div>
      <div className="flex flex-wrap w-full gap-4 justify-center mt-6">
        <div>
          {userLoggedIn ? (
            <Logout setUserLoggedIn={setUserLoggedIn} />
          ) : (
            <UserLogin />
          )}
        </div>
        <div>
          {!userLoggedIn && (
            <button
              className="inline-block w-full text-center bg-cyan-500 text-white font-semibold m-3 px-6 py-4 rounded-lg shadow-md hover:bg-cyan-600 hover:shadow-lg transition duration-300"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          )}
        </div>
        <div>
          <button
            className="inline-block w-full text-center bg-cyan-500 text-white font-semibold m-3 px-6 py-4 rounded-lg shadow-md hover:bg-cyan-600 hover:shadow-lg transition duration-300"
            onClick={() => navigate("/matchpreview")}
          >
            Update Score
          </button>
        </div>
        {userLoggedIn ? (
          <div>
            <NavLink
              to="/registration"
              className="inline-block w-full text-center bg-cyan-500 text-white font-semibold m-3 px-6 py-4 rounded-lg shadow-md hover:bg-cyan-600 hover:shadow-lg transition duration-300"
            >
              Player Registration!!!
            </NavLink>
          </div>
        ) : (
          " "
        )}
      </div>
      <div className="mt-4 bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 text-yellow-900 py-3 px-4 rounded-md shadow text-center text-base font-semibold tracking-wide">
        📢 Stay tuned! Match results & announcements will appear here.
      </div>
    </>
  );
}

export default MplHomePage;
