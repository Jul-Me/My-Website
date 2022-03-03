import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import StyledNav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Headroom from 'react-headroom';
import logo from '../../assets/images/logo.png';
import { NavItem } from '../../types/NavItem';
import { Sections } from '../../types/Sections';
import './Nav.scss';

interface Props {
  scrollToComponent: (id: string) => void;
}

function Nav({ scrollToComponent }: Props): JSX.Element {
  const navItems: NavItem[] = [
    { id: Sections.HOME, text: 'Home', isButton: false },
    { id: Sections.ABOUT, text: 'About', isButton: false },
    { id: Sections.PORTFOLIO, text: 'Portfolio', isButton: false },
    { id: 'resume', text: 'Resume', isButton: true },
  ];

  const renderItem = (item: NavItem) => {
    if (!item.isButton) {
      return (
        <StyledNav.Link className="nav-links" key={item.id} onClick={() => scrollToComponent(item.id)}>
          {item.text}
        </StyledNav.Link>
      );
    } else {
      return (
        <Link key={item.id} className="button ms-lg-3 m-auto" to="/files/cv.pdf" target="_blank" download>
          {item.text}
        </Link>
      );
    }
  };

  return (
    <Headroom>
      <Navbar expand="lg" className="nav">
        <Container>
          <Navbar.Brand onClick={() => scrollToComponent(Sections.HOME)}>
            <img src={logo} alt="logo" className="nav-logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <StyledNav className="ms-auto align-items-center">{navItems?.map(renderItem)}</StyledNav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Headroom>
  );
}

export default Nav;
