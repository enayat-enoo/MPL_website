import React from 'react'

function FixtureCard(props) {
  return (
    <div>
      <a href={props.link} target="_blank">
      <div className="bg-green-100 p-4 rounded-lg shadow-md hover:scale-105 transition-transform text-center">
  <p className="font-semibold">{props.team} vs {props.opponent}</p>
  <p className="text-gray-600">Date: {props.date}</p>
  <p className="text-gray-600">Time: 1:00 PM</p>
  <p className='text-gray-600'>Venue: Madina Stadium</p>
</div>
</a>
    </div>
  )
}

export default FixtureCard
