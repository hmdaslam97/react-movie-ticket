import React from 'react'
import {useParams,useNavigate} from "react-router-dom"
import movieData from '../../helper/data';

function Movie() {
  const {id}=useParams();
  const movieDetails=movieData[id-1]
  const navigate=useNavigate();

  return (
    <div className='movieMain'>
      <div className="moviePic">
        <img src={movieDetails.pic} alt="" />
      </div>
      
      <div className="movieDescription">
        <table>
          <tbody>
            <tr>
            <th>Movie Name</th>
            <td><h1>{movieDetails.name}</h1></td>
          </tr>
          <tr>
            <th>Descpition</th>
            <td>{movieDetails.description}</td>
          </tr>
          <tr>
            <th>Rating</th>
            <td>{movieDetails.rating} / 10</td>
          </tr>
          </tbody>
        </table>
        <button onClick={()=>navigate(`/seating/${movieDetails.stdRate}`)}>Book Ticket Now</button>
      </div>
    </div>
  )
}

export default Movie
