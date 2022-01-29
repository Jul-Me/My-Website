import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import './Hero.scss';

function Hero(): JSX.Element {
  const navigate = useNavigate();
  const transformation = (str: string) => [...str].map((char) => <Item key={uuid()} char={char} />);

  const renderGreeting = () => {
    const str1 = `Hi there, I'm `;
    const str2 = `Julian Memai `;
    const str3 = `Junior Software Developer`;

    return (
      <>
        <h3>{transformation(str1)}</h3>
        <h1 className="display-2">{transformation(str2)}</h1>
        <h3>{transformation(str3)}</h3>

        <button className="button mt-4" onClick={() => navigate('#contact')}>
          Contact
        </button>
      </>
    );
  };

  const renderIcons = () => (
    <Row className="hero-icons align-items-center">
      <Col lg={12} xs={4}>
        <a
          href="https://www.linkedin.com/in/julian-memai/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </Col>

      <Col lg={12} xs={4}>
        <a href="https://github.com/Jul-Me" target="_blank" rel="noopener noreferrer" aria-label="Github">
          <FontAwesomeIcon icon={faGithubSquare} size="2x" />
        </a>
      </Col>

      <Col lg={12} xs={4}>
        <a href="https://twitter.com/julianmemai" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
        </a>
      </Col>
    </Row>
  );

  return (
    <div className="hero">
      <Container>
        <Row>
          <Col lg={6} md={12} className="hero-text gy-5">
            {renderGreeting()}
          </Col>

          <Col lg={5} md={12} className="gy-5">
            <div className="hero-img"></div>
          </Col>

          <Col lg={1} className="gy-5">
            {renderIcons()}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;

interface ItemProps {
  char: string;
}

const Item = ({ char }: ItemProps): JSX.Element => {
  const [active, setActive] = useState(false);

  return (
    <span
      className={active ? 'animated' : ''}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() =>
        setTimeout(() => {
          setActive(false);
        }, 1000)
      }
    >
      {char}
    </span>
  );
};
