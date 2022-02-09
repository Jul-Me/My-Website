import React from 'react';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import Service from './components/Service/Service';
import Portfolio from './components/Portfolio/Portfolio';
import './App.scss';

function App(): JSX.Element {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <AboutMe />
      <Service />
      <Portfolio />
    </div>
  );
}

export default App;
