import React from 'react'

function FixtureCard(props) {
  return (
    <div>
      <div className="bg-green-100 p-4 rounded-lg shadow-md hover:scale-105 transition-transform">
  <p className="font-semibold">{props.team} vs {props.opponent}</p>
  <p className="text-gray-600">Date: 2023-08-15</p>
  <p className="text-gray-600">Time: 1:00 PM</p>
  <p className='text-gray-600'>Venue: Stadium A</p>
</div>

    </div>
  )
}

export default FixtureCard
