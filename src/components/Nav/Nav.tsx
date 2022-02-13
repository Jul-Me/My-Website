import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import StyledNav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
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
        <button key={item.id} className="button ms-lg-3 m-auto">
          {item.text}
        </button>
      );
    }
  };

  return (
    <Navbar expand="lg" className="nav">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" className="nav-logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <StyledNav className="ms-auto align-items-center">{navItems?.map(renderItem)}</StyledNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
