import React from 'react';
import ReactDOM from 'react-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style/HeaderNav.css';

class TopNav extends React.Component {
  render() {
    return (
      <Navbar className="nav_zero_bottom">
        <Nav>
          <NavItem componentClass={Link} href="/about" to="/about" active={location.pathname === '/about'}>
            About Us
          </NavItem>
          <NavItem componentClass={Link} href="/contact" to="/contact" active={location.pathname === '/contact'}>
            Contact Us
          </NavItem>
          <NavItem componentClass={Link} href="/donate" to="/donate" active={location.pathname === '/donate'}>
            Donate
          </NavItem>
        </Nav>
        <Nav style={{marginRight: "5px" }} pullRight>
          <NavItem componentClass={Link} href="#" to="#" active={location.pathname === '#'}>
            Register/Login
          </NavItem>
          <NavItem componentClass={Link} href="#" to="#" active={location.pathname === '#'}>
            FAQ
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default TopNav;