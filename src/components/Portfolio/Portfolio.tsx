import React, { forwardRef } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkSquare } from '@fortawesome/free-solid-svg-icons';
import { PortfolioItem } from '../../types/PortfolioItem';
import { Sections } from '../../types/Sections';
import './Portfolio.scss';

const Portfolio = forwardRef((_, ref: React.ForwardedRef<HTMLDivElement>): JSX.Element => {
  const portfolioItems: PortfolioItem[] = [
    {
      id: 'rock-paper-scissors',
      text: 'Rock Paper Scissors',
      description: `Rock Paper Scissors is a personal project build in Vanilla JS.
        Winning will add one point to your score but if you lose your score will decrease by one as well!
        A classic game to play, good luck and have fun!`,
      gitHubUrl: 'https://github.com/Jul-Me/Rock-Paper-Scissors',
      demoUrl: 'https://rock-paper-scissors-julian.netlify.app/',
    },
    {
      id: 'catch-the-doggies',
      text: 'Catch the Doggies',
      description: `This is a personal project built in Vanilla JS.
        Catch the doggies is a game, very fun to play but impossible to win.
        Pick a doggie and try it yourself!`,
      gitHubUrl: 'https://github.com/Jul-Me/Catch-the-doggies',
      demoUrl: 'https://catch-the-doggies-julian.netlify.app/',
    },
    {
      id: 'random-meal-generator',
      text: 'Random Meal Generator',
      description: `This is a personal project built in Vanilla JS.
        Random meal generator is a little program that will generate
        random meals by clicking a button using the The MealDB's public API.`,
      gitHubUrl: 'https://github.com/Jul-Me/Random-Meal-Generator',
      demoUrl: 'https://random-meal-generator-julian.netlify.app/',
    },
    {
      id: 'github-dev-finder',
      text: 'GitHub Dev Finder',
      description: `Github DevFinder is a personal project built in Vanilla JS.
        Using the public Github API to find and display its user's profile information.
        Search and find your favorite developer!`,
      gitHubUrl: 'https://github.com/Jul-Me/Github-DevFinder',
      demoUrl: 'https://github-devfinder-julian.netlify.app/',
    },
    {
      id: '1',
      text: 'Coming soon...',
      description: '',
      gitHubUrl: '',
      demoUrl: '',
    },
    {
      id: '2',
      text: 'Coming soon...',
      description: '',
      gitHubUrl: '',
      demoUrl: '',
    },
  ];
  const renderCard = (item: PortfolioItem) => {
    const background = `${process.env.PUBLIC_URL}/images/${item.id}.png`;

    return (
      <Col key={item.id} className="portfolio-cols">
        <Card
          className="portfolio-card"
          border="light"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <Card.Body className="portfolio-content">
            <Card.Title>{item.text}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>

          <Card.Footer className="portfolio-content portfolio-footer">
            <a
              className="portfolio-links"
              href={item.gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithubSquare} size="2x" />
            </a>

            <a
              className="portfolio-links"
              href={item.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
            >
              <FontAwesomeIcon icon={faExternalLinkSquare} size="2x" />
            </a>
          </Card.Footer>
        </Card>

        <br />
      </Col>
    );
  };

  return (
    <section className="portfolio" id={Sections.PORTFOLIO} ref={ref}>
      <Container>
        <Row className="mb-5">
          <h1 className="text-lg-end">My Portfolio</h1>
        </Row>

        <Row>{portfolioItems.map(renderCard)}</Row>
      </Container>
    </section>
  );
});

export default Portfolio;
