import React from "react";

function Header() {
  return (
    <div className="w-full text-center p-6 bg-gradient-to-r from-green-100 to-green-50 border border-green-300 rounded-xl shadow-md">
      <h1 className="text-4xl font-bold text-green-800 mb-2 tracking-wide">
        Maskedih Premier League
      </h1>
      <p className="text-lg text-gray-700 italic">
        When the bat speaks and the ball flies,
        <br />
        villages roar under the Maskedih skies!
      </p>
    </div>
  );
}

export default Header;
