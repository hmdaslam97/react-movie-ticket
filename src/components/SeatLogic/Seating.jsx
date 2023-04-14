import React, { useEffect } from "react"
import "../../styles/Seatings.css"
import EventSeatIcon from "@mui/icons-material/EventSeat"
import { useSelector } from "react-redux"
import DispSeat from "./DispSeat.jsx"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

export default function Seating() {
  const { col1, col2 } = useSelector((state) => state.custom.customeReducer2)
  const dispatch = useDispatch()
  const {rate}=useParams();
  const onSelectRow = (row, index, type) => {
    let tempRow = [...row]
    tempRow = tempRow.map((item, i) => {
      if (index == i) {
        if (item.selected == true) {
          return { ...item, selected: false, empty: true }
        } else {
          return { ...item, selected: true, empty: false }
        }
      } else {
        return item
      }
    })
    if (type == "col1") {
      dispatch({ type: "selectSeatCol1", payload: tempRow })
    } else {
      dispatch({ type: "selectSeatCol2", payload: tempRow })
    }
  }

  let selectedSeats=[];
  let getAllSeats=(col)=>{
        selectedSeats=[];
        col.map(item=>item.selected && selectedSeats.push(1))
        return selectedSeats.length;
    }

  const payment=()=>{
      alert("Payment Done! :)")
      dispatch({type:"reset"})
    }

    useEffect(()=>{
      dispatch({type:"reset"})
    },[])

  return (
    <div className="main">
      <div className="layout">
        <div className="disp"></div>

        <div className="seatContainer">
          <div className="col1">
            <DispSeat data={col1} onSelectRowFn={onSelectRow} colType="col1"/>
          </div>
          <div className="col2">
            <DispSeat data={col2} onSelectRowFn={onSelectRow} colType="col2"/>
          </div>
        </div>
      </div>

      <div className="note">
        <h5>
          <EventSeatIcon style={{ color: "red", fontSize: "25px" }} /> Already
          Booked
        </h5>
        <h5>
          <EventSeatIcon style={{ color: "green", fontSize: "25px" }} /> You
          have Selected
        </h5>
        <h5>
          <EventSeatIcon style={{ color: "grey", fontSize: "25px" }} />
          Available
        </h5>
      </div>

      <div className="totalling">
        <h3>You have selected: {getAllSeats(col1)+getAllSeats(col2)} seat and Total Cost is Rs. {(getAllSeats(col1)+getAllSeats(col2))*rate}</h3>
        <button onClick={payment} className="payment">Make Payment</button>
      </div>
    </div>
  )
}
