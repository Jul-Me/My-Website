import React, { forwardRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Col, Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { Sections } from '../../types/Sections';
import './Hero.scss';

interface Props {
  scrollToContact: () => void;
}

const Hero = forwardRef(({ scrollToContact }: Props, ref: React.ForwardedRef<HTMLDivElement>): JSX.Element => {
  const transformation = (str: string) => [...str].map((char) => <Item key={uuid()} char={char} />);

  const renderGreeting = () => {
    const str1 = `Hi there, I'm `;
    const str2 = `Julian Memai `;
    const str3 = `Web Developer  | Problem solver`;

    return (
      <>
        <h3>{transformation(str1)}</h3>
        <h1 className="display-2">{transformation(str2)}</h1>
        <h3>{transformation(str3)}</h3>

        <button className="button mt-4" onClick={scrollToContact}>
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
    <section className="hero" id={Sections.HOME} ref={ref}>
      <Container>
        <Row>
          <Col lg={6} md={12} className="hero-greeting hero-col">
            {renderGreeting()}
          </Col>

          <Col lg={5} md={12} className="hero-col">
            <div className="hero-img"></div>
          </Col>

          <Col lg={1} className="hero-col">
            {renderIcons()}
          </Col>
        </Row>
      </Container>
    </section>
  );
});

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
