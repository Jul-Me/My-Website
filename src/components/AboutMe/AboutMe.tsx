import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faPlane, faBicycle } from '@fortawesome/free-solid-svg-icons';
import { Sections } from '../../types/Sections';
import './AboutMe.scss';

function AboutMe(): JSX.Element {
  const renderBio = () => {
    return (
      <div className="about-me-info">
        <h1>Me, Myself and I</h1>

        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ligula lacus, finibus non ornare ut,
          ultrices laoreet erat. Nullam porttitor tortor tempus enim malesuada porta. Etiam aliquet purus mi, eget
          vehicula tellus facilisis non. Phasellus bibendum cursus nibh, quis pretium mi tempor ac. Cras eget felis in
          tortor convallis sollicitudin quis vel risus. Aliquam commodo tellus vel ipsum ullamcorper congue. Praesent
          laoreet ligula placerat elementum congue. In sed fringilla velit, eu facilisis elit.
        </p>
      </div>
    );
  };

  const renderDetails = () => {
    return (
      <>
        <Row className="mt-3">
          <Col xl={6} lg={12} className="d-flex align-items-center">
            <span className="text-bold">Gender:&nbsp;</span>
            <span>Male</span>
          </Col>

          <Col xl={6} lg={12} className="d-flex align-items-center">
            <span className="text-bold">Location:&nbsp;</span>
            <span>Reading, UK</span>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col xl={6} lg={12} className="d-flex align-items-center">
            <span className="text-bold">Age:&nbsp;</span>
            <span>30</span>
          </Col>

          <Col xl={6} lg={12} className="d-flex align-items-center">
            <span className="text-bold">Email:&nbsp;</span>
            <span>memai.julian@gmail.com</span>
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
    <div className="about-me" id={Sections.ABOUT}>
      <Container>
        <Row>
          <Col lg={6} md={12}>
            <div style={{ padding: '10rem', maxWidth: '70%', backgroundColor: 'grey' }}></div>
          </Col>

          <Col lg={6} md={12}>
            {renderBio()}
            {renderDetails()}
            {renderHobbies()}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;
