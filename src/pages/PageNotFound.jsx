import React from 'react'
import Navigations from '../components/Navigations'
function PageNotFound() {
  return (
    <div className='text-3xl font-bold text-center text-cyan-500 mb-6 p-2 rounded'>
      <Navigations/>
      <h2 className="text-center text-3xl text-red-600 mt-20">Page Not Found 🚫</h2>
    </div>
  )
}

export default PageNotFound
