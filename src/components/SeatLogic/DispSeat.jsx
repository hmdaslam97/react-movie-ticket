import React from 'react'
import EventSeatIcon from "@mui/icons-material/EventSeat"

function DispSeat({data,onSelectRowFn=()=>false,colType}) {
    return (
        <div>
            {data.map((item,index) => {
              let seatColor=(item.empty == false && item.selected == true)?"green":(item.empty == true && item.selected == false)?"grey":"red";
              return <EventSeatIcon key={index+1} onClick={()=>{
                 if (item.selected == false && item.empty == false) { alert("Already booked") }
                else { onSelectRowFn(data,index,colType) }
              }} style={{ color: seatColor, fontSize: 30  }} className="seats"/>
            })}
        </div>
    )
}

export default DispSeat
