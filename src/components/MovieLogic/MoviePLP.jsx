import React from 'react'
import Card from './Card.jsx'
import movieData from '../../helper/data'


function MoviePLP() {
  return (
    <div className='moviePLP'>
        { movieData.map((movie)=>
            <Card pic={movie.pic} key={movie.id} id={movie.id} name={movie.name}/>
        )}
    </div>
  )
}

export default MoviePLP
