import React from 'react'
import "../styles/AppRoute.css"
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate=useNavigate()
  return (
    <div className='navbar'>
      <h1 onClick={()=>navigate('/')}>Book <span>My</span> Movie</h1>
      <input type="text" placeholder='Search Movie here ...'/>
    </div>
  )
}

export default Navbar
