import React, { useEffect, useState } from "react";
import axios from 'axios'; 
import CharacterCard from './CharacterCard'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'; 
export default function CharacterList(props) {
  const [searchfilter, setSearchFilter] = useState([]);
  const [searchWord, setSearchWord] = useState(""); 
   

  

  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([])
  useEffect(() => {
    
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(res => { 
      console.log(res.data.results);
      const data = res.data.results; 
      //setChar(res.data.results);
      const result =  data.filter(cartoon => 
        cartoon.name.toLowerCase().includes(searchWord.toLowerCase())
      );
      setSearchFilter(result)
      setChar(result)
    })
    .catch(err => { 
      console.log(err); 
    })
  }, [searchWord]);


  const handleChange = (event) => { 
    setSearchWord(event.target.value)
  }


  // useEffect(() => { 
  //   if(searchWord !== ""){
  //     const output = char.filter((cartoon) => { 
  //       console.log(searchWord); 
  //       return cartoon.toLowerCase().includes(searchWord.toLowerCase())
  //   });
  //     console.log('hello world')
  //     console.log("results", output);
  //     setSearchFilter(output);  
      
  //   }else if(searchWord === "") {
  //     setSearchFilter([]);
  //   }
  // },[char])


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
  console.log("search filter", searchfilter)
  return (
    <div>
        <section className="search-form">
        <form>
          <label>
            Character Name:  
            <input
              name="name"
              type="text"
              value={searchWord}
              onChange={handleChange}>
            </input>
             
          </label>
        </form>
        <ul>
          
        </ul>
      </section>
      <section className="character-list">
        <h2>{char.map((item)=> { 
          return (
            <CharacterCard key={item.id} id={item.id} image={item.image} name={item.name} status={item.status} species={item.species} type={item.type} gender={item.gender}

          />)})}</h2>
      </section>
    </div>

    
   
  );
}
