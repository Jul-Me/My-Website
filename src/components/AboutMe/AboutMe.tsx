import React, { forwardRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faPlane, faBicycle } from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faLaravel,
  faHtml5,
  faSass,
  faJsSquare,
  faGitAlt,
  faCss3Alt,
  faPhp,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons';
import { Sections } from '../../types/Sections';
import './AboutMe.scss';

const AboutMe = forwardRef((_, ref: React.ForwardedRef<HTMLDivElement>): JSX.Element => {
  const getAge = (): number => {
    const dob = new Date('1991/05/04');
    const diff_ms = Date.now() - dob.getTime();
    const age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  };

  const renderBio = () => {
    return (
      <div className="about-me-info">
        <h1>Me, Myself and I</h1>

        <p className="mt-3">
          Web Developer | Problem solver
          <br />
          <br />
          Ambitious and driven to always expand my comfort zone with new challenges-adventures. Eager learner with a
          hands on attitude and strong work ethics.
          <br />
          <br />
          Passionate about developing user-friendly software applications and bringing ideas to life in the browser.
          Strong preference for web technologies and easy to use intuitive features.
          <br />
          <br />
          Skilled in HTML5, CSS, Bootstrap, React.js , Laravel , Livewire and mySQL. Working knowledge of Adobe Creative
          Suite.
        </p>
      </div>
    );
  };

  const renderDetails = () => {
    return (
      <>
        <Row className="mt-3">
          <Col xl={6} lg={12} className="about-me-details">
            <span className="text-bold">Age:&nbsp;</span>
            <span>{getAge()}</span>
          </Col>

          <Col xl={6} lg={12} className="about-me-details">
            <span className="text-bold">Location:&nbsp;</span>
            <span>United Kingdom</span>
          </Col>
        </Row>
      </>
    );
  };

  const renderHobbies = () => {
    return (
      <>
        <h2 className="mt-5">And my hobbies</h2>

        <Row className="mt-4 ">
          <Col xl={4} lg={6} md={12}>
            <FontAwesomeIcon icon={faDumbbell} size="lg" />
            <span className="ms-4 fs-5">Exercise</span>
          </Col>

          <Col xl={4} lg={6} md={12}>
            <FontAwesomeIcon icon={faBicycle} size="lg" />
            <span className="ms-4 fs-5">Cycling</span>
          </Col>

          <Col xl={4} lg={12} md={12}>
            <FontAwesomeIcon icon={faPlane} size="lg" />
            <span className="ms-4 fs-5">Traveling</span>
          </Col>
        </Row>
      </>
    );
  };

  return (
    <section className="about-me" id={Sections.ABOUT} ref={ref}>
      <Container>
        <Row>
          <Col lg={6} md={12}>
            {renderBio()}
            {renderDetails()}
            {renderHobbies()}
          </Col>

          <Col lg={6} md={12} className="about-me-tools">
            <FontAwesomeIcon icon={faReact} size="5x" />
            <FontAwesomeIcon icon={faJsSquare} size="5x" />
            <FontAwesomeIcon icon={faLaravel} size="5x" />
            <FontAwesomeIcon icon={faHtml5} size="5x" />
            <FontAwesomeIcon icon={faSass} size="5x" />
            <FontAwesomeIcon icon={faGitAlt} size="5x" />
            <FontAwesomeIcon icon={faCss3Alt} size="5x" />
            <FontAwesomeIcon icon={faPhp} size="5x" />
            <FontAwesomeIcon icon={faBootstrap} size="5x" />
          </Col>
        </Row>
      </Container>
    </section>
  );
});

export default AboutMe;
