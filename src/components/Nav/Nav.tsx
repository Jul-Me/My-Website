import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import StyledNav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../../assets/images/logo.png';
import { NavItem } from '../../types/NavItem';
import { Sections } from '../../types/Sections';
import './Nav.scss';

function Nav(): JSX.Element {
  const navItems: NavItem[] = [
    { id: Sections.HOME, text: 'Home', url: `#${Sections.HOME}`, isButton: false },
    { id: Sections.ABOUT, text: 'About', url: `#${Sections.ABOUT}`, isButton: false },
    { id: Sections.PORTFOLIO, text: 'Portfolio', url: `#${Sections.PORTFOLIO}`, isButton: false },
    { id: 'resume', text: 'Resume', isButton: true },
  ];

  const renderItem = (item: NavItem) => {
    if (!item.isButton) {
      return (
        <StyledNav.Link className="nav-links" key={item.id} href={item.url}>
          {item.text}
        </StyledNav.Link>
      );
    } else {
      return (
        <Link key={item.id} to={item.url ? item.url : ''} className="button ms-lg-3 m-auto">
          {item.text}
        </Link>
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
