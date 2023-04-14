import React from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import './styles/AppRoute.css'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import MoviePLP from './components/MovieLogic/MoviePLP.jsx'
import Movie from './components/MovieLogic/Movie.jsx'
import Seating from './components/SeatLogic/Seating.jsx'

export default function AppRoute() {
  // console.log(movieData.map((item)=>console.log(item.name)))

  return (
    <div className='AppRoute'>
      <Router>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<MoviePLP/>} />
            <Route path="/movie/:id" element={<Movie/>} />
            <Route path="/seating/:rate" element={<Seating/>} />
          </Routes>  
        <Footer/>
      </Router>
      
    </div>
  )
}


