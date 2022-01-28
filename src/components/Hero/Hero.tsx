import React, { SyntheticEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Col, Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import './Hero.scss';

function Hero() {
  const transformation = (str: string) => [...str].map((char) => <Item key={uuid()} char={char} />);

  const renderGreeting = () => {
    const str1 = `Hi there, I'm`;
    const str2 = `Julian Memai`;
    const str3 = `Junior Software Developer`;

    return (
      <div className="hero-text">
        <h3>{transformation(str1)}</h3>
        <h1 className="display-2">{transformation(str2)}</h1>
        <h3>{transformation(str3)}</h3>

        <button className="button mt-4">Contact</button>
      </div>
    );
  };

  const renderIcons = () => (
    <Row className="hero-icons align-items-center">
      <Col lg={12} xs={4}>
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </Col>

      <Col lg={12} xs={4}>
        <FontAwesomeIcon icon={faGithubSquare} size="lg" />
      </Col>

      <Col lg={12} xs={4}>
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

          <Col xl={5} lg={6} md={12} className="gy-5">
            <div className="hero-img"></div>
          </Col>

          <Col className="gy-5">{renderIcons()}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;

interface ItemProps {
  char: string;
}

const Item = ({ char }: ItemProps) => {
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
