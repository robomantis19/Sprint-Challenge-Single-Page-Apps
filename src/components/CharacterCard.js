import React from "react";
import {BrowserRouter as Link} from 'react-router-dom'; 
export default function CharacterCard(props) {

  return (
    // <Link to={`/character/${props.id}`}>Characters
            <div style={{border:`2px solid black`}}>
              <h2>{props.name}</h2> 
              <img src={props.image}/>
              <p>{props.status}</p> 
              <p>{props.species}</p> 
              <p>{props.type}</p> 
              <p>{props.gender}</p>
            </div>
    // </Link>
  )
}
