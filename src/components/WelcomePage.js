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
        <Link to="/">
        <h1>Welcome to the ultimate fan site!</h1>
        </Link>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
       
        {/* <Route path="/character/" component={CharacterList}></Route>  */}
        <SearchForm characters={characters}/>
        {/* <Route path="/character/" component={CharacterList}></Route>  */}
        <CharacterList setCharacters={setCharacters}/>
        {/* <Route path="/character/:id" render={props => <CharacterList {...props} addToCharacters={addToCharacters}/>}/> */}
        

         
        
        
      </header>
    </section>
  );
}
