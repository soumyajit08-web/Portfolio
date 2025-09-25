import React from 'react'
import "./card.css"
import mern from "../../assets/mern.png"
function Card({title,image, onClick}) {
  return (
    
    <div className="card" onClick={onClick} style={{cursor: "pointer"}}>
        <h1>{title}</h1>
        <div className="hovercard">
            <img src={image} alt="" />
        </div>
    </div>
    
  )
}

export default Card
