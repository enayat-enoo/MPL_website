import React from "react";
import { useNavigate } from "react-router-dom";
function FixtureCard(props) {
  const navigate = useNavigate();
  return (
    <div>
      <a target="_blank"
      onClick={()=>navigate(`/score/${props.matchid}`)}>
        <div className="bg-green-100 p-4 rounded-lg shadow-md hover:scale-105 transition-transform text-center"
        >
          <p className="font-semibold">
            {props.team} vs {props.opponent}
          </p>
          <p className="text-gray-600">Date: {props.date}</p>
          <p className="text-gray-600">Time: 00:00</p>
          <p className="text-gray-600">Venue: Venue Name</p>
        </div>
      </a>
    </div>
  );
}

export default FixtureCard;
