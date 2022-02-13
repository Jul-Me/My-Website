import React, { useRef } from 'react';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import { Sections } from './types/Sections';
import './App.scss';

function App(): JSX.Element {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToComponent = (id: string) => {
    if (id === Sections.HOME && null !== heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    if (id === Sections.ABOUT && null !== aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    if (id === Sections.PORTFOLIO && null !== portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    if (id === Sections.CONTACT && null !== contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <Nav scrollToComponent={scrollToComponent} />
      <Hero scrollToContact={() => scrollToComponent(Sections.CONTACT)} ref={heroRef} />
      <AboutMe ref={aboutMeRef} />
      <Portfolio ref={portfolioRef} />
      <Contact ref={contactRef} />
    </div>
  );
}

export default App;
