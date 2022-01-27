import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import './Hero.scss';

function Hero() {
  const renderGreeting = () => (
    <div className="hero-text">
      <h3>Hi there, I'm</h3>
      <h1 className="display-2">Julian Memai</h1>
      <h3>Junior Software Developer</h3>

      <button className="button mt-4">Contact</button>
    </div>
  );

  const renderIcons = () => (
    <Row className="hero-icons align-items-center">
      <Col md={12} xs={4}>
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </Col>

      <Col md={12} xs={4}>
        <FontAwesomeIcon icon={faGithubSquare} size="lg" />
      </Col>

      <Col md={12} xs={4}>
        <FontAwesomeIcon icon={faTwitterSquare} size="lg" />
      </Col>
    </Row>
  );
  return (
    <div className="hero">
      <Container>
        <Row>
          <Col xl={6} lg={5} md={12}>
            {renderGreeting()}
          </Col>

          <Col xl={5} lg={6} md={11} className="gy-5">
            <div className="hero-img"></div>
          </Col>

          <Col md={1} className="gy-5">
            {renderIcons()}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
