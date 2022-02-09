import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import StyledNav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavItems } from '../../types/NavItems';
import logo from '../../assets/images/logo.png';
import './Nav.scss';

function Nav(): JSX.Element {
  const navItems: NavItems[] = [
    { id: 'home', text: 'Home', url: '#home', isButton: false },
    { id: 'about', text: 'About', url: '#about', isButton: false },
    { id: 'services', text: 'Services', url: '#services', isButton: false },
    { id: 'portofolio', text: 'Portofolio', url: '#portofolio', isButton: false },
    { id: 'contact', text: 'Contact', url: '#contact', isButton: true },
  ];

  const renderItem = (item: NavItems) => {
    if (!item.isButton) {
      return (
        <StyledNav.Link className="nav-links" key={item.id} href={item.url}>
          {item.text}
        </StyledNav.Link>
      );
    } else {
      return (
        <Link key={item.id} to={item.url} className="button ms-lg-3 m-auto">
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
