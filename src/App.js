import React, {useState} from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage'; 
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CharacterList from './components/CharacterList'
import CharacterCard from './components/CharacterCard';
import SearchForm from './components/SearchForm'; 

export default function App() {
  const [characters, setCharacters] = useState([])

  const addToCharacters = cartoon => { 
    setCharacters([...characters, cartoon])
  }
  return (
    <main>
      <Header />
      <SearchForm characters={characters}/>
      <Route exact path="/" component={WelcomePage}></Route>
      
      {/* <Route path="/character/" component={CharacterList}></Route>  */}
      <Route path="/character/" render={props => <CharacterCard {...props} addToCharacters={addToCharacters}/>}/>

    </main>
  );
}
