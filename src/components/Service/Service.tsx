import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Service.scss';

function Service(): JSX.Element {
  const webDesignText = `Some quick example text to build on the card title and make up the bulk of the card's content.Some
  quick example text to build on the card title and make up the bulk of the card's content.Some quick
  example text to build on the card title and make up the bulk of the card's content.`;
  const frontEndText = webDesignText;
  const backEndText = webDesignText;

  const renderCard = (title: string, text: string) => (
    <Col>
      <Card className="service-cards" border="light">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
      <br />
    </Col>
  );

  return (
    <div className="service">
      <Container>
        <Row className="mb-5">
          <h1>What I Offer?</h1>
        </Row>

        <Row>
          {renderCard('Web Design', webDesignText)}
          {renderCard('Front-End', frontEndText)}
          {renderCard('Back-End', backEndText)}
        </Row>
      </Container>
    </div>
  );
}

export default Service;
