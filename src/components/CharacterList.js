import React, { useEffect, useState } from "react";
import axios from 'axios'; 
import CharacterCard from './CharacterCard'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'; 
export default function CharacterList(props) {


  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([])
  useEffect(() => {
    
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(res => { 
      console.log(res.data.results); 
      setChar(res.data.results); 
      
    })
    .catch(err => { 
      console.log(err); 
    })
  }, []);
  // useEffect(() => {
  //   const id = props.match.params.id
  //   // TODO: Add API Request here - must run in `useEffect`
  //   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  //   axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  //   .then(res => { 
  //     console.log(res.data); 
  //     setChar(res.data); 
  //   })
  //   .catch(err => { 
  //     console.log(err); 
  //   })
  // }, []);
  props.setCharacters(char)
  return (
    
      <section className="character-list">
        <h2>{char.map((item)=> { 
          return (
            <CharacterCard key={item.id} id={item.id} image={item.image} name={item.name} status={item.status} species={item.species} type={item.type} gender={item.gender}

          />)})}</h2>
      </section>
    
    
   
  );
}
