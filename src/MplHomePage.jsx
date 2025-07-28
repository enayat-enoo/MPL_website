import React from "react";
import { NavLink } from "react-router-dom";
import FixtureCard from "./components/FixtureCard";
import PointsTable from "./components/PointsTable";
function MplHomePage() {
  return (
    <>
      <div className="flex flex-wrap w-full gap-1 justify-center ">
        <div className="rounded-lg bg-gradient-to-br from-green-200 to-green-100 p-4 shadow-xl w-80">
            <h2 className="text-xl font-bold text-green-800 mb-3 border-b border-green-500 pb-2">
              Participating Teams
            </h2>
          <ol className="space-y-2 text-left list-decimal list-inside text-sm font-medium text-center">
            <NavLink to='maskedihsuperkings'>
          <li className="bg-white rounded px-2 py-1 hover:bg-green-300 hover:text-white transition shadow-sm">
            Maskedih Super Kings
          </li>
          </NavLink>
          <NavLink to="maskedihstrikers">
          <li className="bg-white rounded px-2 py-1 hover:bg-green-300 hover:text-white transition shadow-sm">
            Maskedih Strikers
          </li>
          </NavLink>
          <NavLink to="maskedihmavericks">
          <li className="bg-white rounded px-2 py-1 hover:bg-green-300 hover:text-white transition shadow-sm">
            Maskedih Mavericks
          </li>
          </NavLink>
          <NavLink to="maskedihwarriors">
          <li className="bg-white rounded px-2 py-1 hover:bg-green-300 hover:text-white transition shadow-sm">
            Maskedih Warriors
          </li>
          </NavLink>
          <NavLink to="zulfiqarstrikers">
          <li className="bg-white rounded px-2 py-1 hover:bg-green-300 hover:text-white transition shadow-sm">
            Zulfiqar Strikers
          </li>
          </NavLink>
          <NavLink to="samuraixi">
          <li className="bg-white rounded px-2 py-1 hover:bg-green-300 hover:text-white transition shadow-sm">
            Samurai XI
          </li>
          </NavLink>
          <NavLink to='badshahxi'>
          <li className="bg-white rounded px-2 py-1 hover:bg-green-300 hover:text-white transition shadow-sm">
            Badshah XI
          </li>
          </NavLink>
          <NavLink to='rsiixi'>
          <li className="bg-white rounded px-2 py-1 hover:bg-green-300 hover:text-white transition shadow-sm">
            RSII XI
          </li>
          </NavLink>
          </ol>
        </div>

        <div className="flex-1 bg-gradient-to-br from-blue-50 to-white p-4 rounded-lg shadow-xl mx-2">
          <h2 className="text-xl font-bold text-blue-800 mb-3 border-b border-blue-400 pb-2 text-center">
            Upcoming Fixtures
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <FixtureCard
              team={"Maskedih Super Kings"}
              opponent={"Maskedih Mavericks"}
              date={"30 July 2025"}
              link={
                "https://cricheroes.com/scorecard/18219817/-maskedih-premier-league-season-08-sponsors-by-good-dream-public-school-/maskedih-super-kings-vs-maskedih-mavericks/upcoming"
              }
            />
            <br />
            <FixtureCard
              team={"Maskedih Warriors"}
              opponent={"RSII XI"}
              date={"30 July 2025"}
              link={
                "https://cricheroes.com/scorecard/18219818/-maskedih-premier-league-season-08-sponsors-by-good-dream-public-school-/maskedih-warriors-vs-rsi-xi/upcoming"
              }
            />
            <br />
            <FixtureCard
              team={"Zulfiqar Strikers"}
              opponent={"Badshah XI"}
              date={"30 July 2025"}
              link={
                "https://cricheroes.com/scorecard/18219816/-maskedih-premier-league-season-08-sponsors-by-good-dream-public-school-/zulfiqar-strikers-vs-baadshah-xi/live"
              }
            />
          </div>
        </div>

        <div className="rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 p-4 shadow-xl w-80">
          <h2 className="text-xl font-bold text-purple-800 mb-3 border-b border-purple-400 pb-2">
            Points Table
          </h2>
          <PointsTable />
        </div>
      </div>
      <div className="mt-4 bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 text-yellow-900 py-3 px-4 rounded-md shadow text-center text-base font-semibold tracking-wide">
        📢 Stay tuned! Match results & announcements will appear here.
      </div>
    </>
  );
}

export default MplHomePage;
