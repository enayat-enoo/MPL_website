import React from "react";

function Logout({setUserLoggedIn}) {
    async function logoutHandler(){
        const log = await fetch('https://mpl-backend-ct21.onrender.com/logout',{
            credentials: 'include'
        });

        const result = await log.json();
        setUserLoggedIn(!result.logout)
    }

  return (
    <div>
      <button
        className="inline-block w-full text-center bg-cyan-500 text-white font-semibold m-3 px-6 py-4 rounded-lg shadow-md hover:bg-cyan-600 hover:shadow-lg transition duration-300"
        onClick={logoutHandler}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;

