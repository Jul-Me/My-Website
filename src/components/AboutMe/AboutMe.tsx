import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faPlane, faBicycle } from '@fortawesome/free-solid-svg-icons';
import './AboutMe.scss';

function AboutMe(): JSX.Element {
  const renderBio = () => {
    return (
      <>
        <h1>Me, Myself and I</h1>

        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ligula lacus, finibus non ornare ut,
          ultrices laoreet erat. Nullam porttitor tortor tempus enim malesuada porta. Etiam aliquet purus mi, eget
          vehicula tellus facilisis non. Phasellus bibendum cursus nibh, quis pretium mi tempor ac. Cras eget felis in
          tortor convallis sollicitudin quis vel risus. Aliquam commodo tellus vel ipsum ullamcorper congue. Praesent
          laoreet ligula placerat elementum congue. In sed fringilla velit, eu facilisis elit.
        </p>
      </>
    );
  };

  const renderDetails = () => {
    return (
      <>
        <Row className="mt-3">
          <Col>
            <span className="text-bold">Gender: </span>
            <span>Male</span>
          </Col>

          <Col>
            <span className="text-bold">Location: </span>
            <span>Reading, UK</span>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <span className="text-bold">Age: </span>
            <span>30</span>
          </Col>

          <Col>
            <span className="text-bold">Email: </span>
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

        <Row className="mt-4">
          <Col>
            <FontAwesomeIcon icon={faDumbbell} size="lg" />
            <span className="ms-4 fs-5">Exercise</span>
          </Col>

          <Col>
            <FontAwesomeIcon className="ms-4" icon={faBicycle} size="lg" />
            <span className="ms-4 fs-5">Cycling</span>
          </Col>

          <Col>
            <FontAwesomeIcon className="ms-4" icon={faPlane} size="lg" />
            <span className="ms-4 fs-5">Traveling</span>
          </Col>
        </Row>
      </>
    );
  };

  return (
    <div className="about-me">
      <Container>
        <Row>
          <Col>
            <div style={{ padding: '10rem', maxWidth: '70%', backgroundColor: 'grey' }}></div>
          </Col>

          <Col>
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
