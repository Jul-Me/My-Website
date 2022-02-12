import React from 'react';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import './App.scss';

function App(): JSX.Element {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <AboutMe />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
