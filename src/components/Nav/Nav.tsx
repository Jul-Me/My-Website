import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { NavItems } from '../../types/NavItems';
import './Nav.scss';

function Nav() {
  const navItems: NavItems[] = [
    { id: 'home', text: 'Home', url: '#home', isButton: false },
    { id: 'about', text: 'About', url: '#about', isButton: false },
    { id: 'services', text: 'Services', url: '#services', isButton: false },
    { id: 'portofolio', text: 'Portofolio', url: '#portofolio', isButton: false },
    { id: 'contact', text: 'Contact', url: '#contact', isButton: true },
  ];

  return (
    <nav className="nav">
      <div className="nav__logo"> Logo </div>

      <ul className="nav__items">
        {navItems?.map((item) => (
          <li key={item.id}>
            <Link to={item.url} className={classNames('nav__link', { button: item.isButton })}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
