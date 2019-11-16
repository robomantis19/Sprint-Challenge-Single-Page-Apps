import React, {useState} from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage'; 
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CharacterList from './components/CharacterList'
import CharacterCard from './components/CharacterCard';
import SearchForm from './components/SearchForm'; 

export default function App() {
  
  return (
    <main>
      <Header />
      
      <Route exact path="/" component={WelcomePage}></Route>
      <Route path="/characters/" component={CharacterList}></Route>
      {/* <Route path="/character/" component={CharacterList}></Route>  */}
      {/* <Route path="/character/" render={props => <CharacterCard {...props} addToCharacters={addToCharacters}/>}/> */}

    </main>
  );
}
