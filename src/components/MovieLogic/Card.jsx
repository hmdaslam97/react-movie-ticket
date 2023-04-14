import React from 'react'
import {useNavigate} from "react-router-dom"

function Card(props) {
  const navigate=useNavigate();

  return (
    <div className='card'  onClick={()=>navigate("/movie/"+props.id)}>
      <img src={props.pic} alt={props.name} />
    </div>
  )
}

export default Card
