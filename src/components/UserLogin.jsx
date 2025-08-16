import React from 'react'
import { NavLink } from 'react-router-dom'
function UserLogin() {
  return (
    <div>
       <NavLink
        to="/login"
        className="inline-block w-full text-center bg-cyan-500 text-white font-semibold m-3 px-6 py-4 rounded-lg shadow-md hover:bg-cyan-600 hover:shadow-lg transition duration-300"
      >
        Login
      </NavLink>
    </div>
  )
}

export default UserLogin
