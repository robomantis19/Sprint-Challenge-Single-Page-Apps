import React, {useState} from "react";
import SearchForm from './SearchForm'; 
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'; 
import CharacterList from './CharacterList'; 
export default function WelcomePage() {
  const [characters, setCharacters] = useState([])

  // const addToCharacters = cartoon => { 
  //   setCharacters([...characters, cartoon])
  // }
  return (
    <section className="welcome-page">
      <header>
      <Link  to="/characters/" ><h1 style={{width: `140px` , textDecoration: `none`,  backgroundColor: `blue`, borderRadius: `2rem`}}>Characters</h1></Link>
        {/* <Link to="/"><h1>Home</h1></Link> */}
        <h1>Welcome to the ultimate fan site!</h1>
        
        
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
       
        {/* <Route path="/character/" component={CharacterList}></Route>  */}
        
        {/* <Route path="/character/" component={CharacterList}></Route>  */}
        {/* <Route path="/character/:id" render={props => <CharacterList {...props} addToCharacters={addToCharacters}/>}/> */}
        

         
        
        
      </header>
    </section>
  );
}
