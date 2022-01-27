import React from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import './Hero.scss';

function Hero() {
  return (
    <div className="hero">
      <Container>
        <Stack direction="horizontal" gap={3} className="justify-content-between">
          <div className="hero-text">
            <h3>Hi there, I'm</h3>
            <h1>Julian Memai</h1>
            <h3>Junior Software Developer</h3>
            <button className="button mt-4">Contact</button>
          </div>

          <div className="hero-img"></div>

          <Stack gap={5} className="hero-icons align-self-center">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
            <FontAwesomeIcon icon={faGithubSquare} size="lg" />
            <FontAwesomeIcon icon={faTwitterSquare} size="lg" />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

export default Hero;
