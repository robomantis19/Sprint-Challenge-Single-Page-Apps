import React from "react";
import SearchForm from './SearchForm'; 
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'; 
import CharacterList from './CharacterList'; 
export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <Link to="/">
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <SearchForm/>
        {/* <Route path="/character/:id" render={props => <CharacterList {...props}/>}/> */}
        <CharacterList/>

         
        
        </Link>
      </header>
    </section>
  );
}
