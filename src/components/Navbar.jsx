import React from 'react'

function Navbar() {
  return (
    <nav className='bg-red-600 text-white py-5 px-'>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">POTTERS CODING TEAM</h1>
        <ul className="hidden md:flex gap-10 font-semibold">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Our Team</li>
          <li className="cursor-pointer">Projects</li>
        </ul>
        
        <button className="bg-white text-red-600 px-8 py-3 rounded-xl font-semibold">Join Us</button>
      </div>
    </nav>
  )
}

export default Navbar
