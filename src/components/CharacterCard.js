import React from "react";

export default function CharacterCard(props) {
  return <div style={{border:`2px solid black`}}>
            <h2>{props.name}</h2> 
            <img src={props.image}/>
            <p>{props.status}</p> 
            <p>{props.species}</p> 
            <p>{props.type}</p> 
            <p>{props.gender}</p>
         
          
          </div>;
}
