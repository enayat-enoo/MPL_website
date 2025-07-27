import React from "react";
import FixtureCard from "./components/FixtureCard";
import PointsTable from "./components/PointsTable";
function MplHomePage() {
  return (
    <>
      <div className="flex flex-wrap w-full gap-1 ">
        <div className="rounded-lg bg-gradient-to-br from-green-200 to-green-100 p-4 shadow-xl w-60">
          <h2 className="text-xl font-bold text-green-800 mb-3 border-b border-green-500 pb-2">
            Participating Teams
          </h2>
          <ol className="space-y-2 text-left list-decimal list-inside text-sm font-medium">
            {[
              "Maskedih Super Kings",
              "Maskedih Strikers",
              "Maskedih Mavericks",
              "Maskedih Warriors",
              "Zulfiqar Strikers",
              "Badshah XI",
              "Samurai XI",
              "RSII XI",
            ].map((team, i) => (
              <li
                key={i}
                className="bg-white rounded px-2 py-1 hover:bg-green-300 hover:text-white transition shadow-sm"
              >
                {team}
              </li>
            ))}
          </ol>
        </div>

        <div className="flex-1 bg-gradient-to-br from-blue-50 to-white p-4 rounded-lg shadow-xl mx-2">
          <h2 className="text-xl font-bold text-blue-800 mb-3 border-b border-blue-400 pb-2">
            Upcoming Fixtures
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <FixtureCard team={"Zulfiqar Strikers"} opponent={"Badshah XI"} />
            <br />
            <FixtureCard team={"Maskedih Warriors"} opponent={"RSII XI"}/>
            <br />
            <FixtureCard team={"Maskedih Mavericks"} opponent={"Samurai XI"}/>
          </div>
        </div>

        <div className="rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 p-4 shadow-xl w-60">
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
