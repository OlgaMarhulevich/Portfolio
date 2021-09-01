import React from 'react';
import './App.css';
import Header from "./header/Header";
import Home from "./home/Home";
import Skills from "./skills/Skills";
import Projects from './projects/Projects';
import Contacts from "./contacts/Contacts";
import Footer from './footer/Footer';

function App() {
  return <div>
      <Header/>
      <Home/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
}

export default App;
