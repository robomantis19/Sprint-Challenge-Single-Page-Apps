import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage'; 
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage}></Route>
    </main>
  );
}
