import { NavLink } from "react-router-dom";
import FixtureCard from "./components/FixtureCard";
import PointsTable from "./components/PointsTable";
import { useState } from "react";
import { useEffect } from "react";
import UserLogin from "./components/UserLogin";
import Logout from "./components/Logout";

function MplHomePage() {
  const [teams, setTeams] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    fetch("https://mpl-backend-ct21.onrender.com/auth/check", {
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
    fetch("https://mpl-backend-ct21.onrender.com")
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
            <FixtureCard
              team={"Team A"}
              opponent={"Team B"}
              date={""}
              link={
                "https://cricheroes.com/scorecard/18219817/-maskedih-premier-league-season-08-sponsors-by-good-dream-public-school-/maskedih-super-kings-vs-maskedih-mavericks/upcoming"
              }
            />
            <br />
            <FixtureCard
              team={"Team C"}
              opponent={"Team D"}
              date={""}
              link={
                "https://cricheroes.com/scorecard/18219818/-maskedih-premier-league-season-08-sponsors-by-good-dream-public-school-/maskedih-warriors-vs-rsi-xi/upcoming"
              }
            />
            <br />
            <FixtureCard
              team={"Team E"}
              opponent={"Team F"}
              date={""}
              link={
                "https://cricheroes.com/scorecard/18219816/-maskedih-premier-league-season-08-sponsors-by-good-dream-public-school-/zulfiqar-strikers-vs-baadshah-xi/live"
              }
            />
          </div>
        </div>

        <div className="rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 p-4 shadow-xl w-80">
          <h2 className="text-xl font-bold text-purple-800 mb-3 border-b border-purple-400 pb-2 text-center">
            Points Table
          </h2>
          <PointsTable />
        </div>
      </div>
      {userLoggedIn ? (
        <Logout setUserLoggedIn={setUserLoggedIn} />
      ) : (
        <UserLogin />
      )}
      <NavLink
        to="/registration"
        className="inline-block w-full text-center bg-cyan-500 text-white font-semibold m-3 px-6 py-4 rounded-lg shadow-md hover:bg-cyan-600 hover:shadow-lg transition duration-300"
      >
        Get Yourself registered for the upcoming season!!!
      </NavLink>

      <div className="mt-4 bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 text-yellow-900 py-3 px-4 rounded-md shadow text-center text-base font-semibold tracking-wide">
        📢 Stay tuned! Match results & announcements will appear here.
      </div>
    </>
  );
}

export default MplHomePage;
