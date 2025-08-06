import React from "react";
function Header() {
  return (
    <div className="w-full text-center p-1 rounded bg-white">
      <img src="./assets/mpllogg.png" alt="" className="w-20 h-20 rounded-full mx-auto" />
      <h1 className="text-4xl font-bold text-amber-700 mb-2 tracking-wide font-serif">
        Maskedih Premier League
      </h1>
      <p className="text-lg text-gray-700 italic font-mono">
        When the bat speaks and the ball flies,
        <br />
        villages roar under the Maskedih skies!
      </p>
    </div>
  );
}

export default Header;
