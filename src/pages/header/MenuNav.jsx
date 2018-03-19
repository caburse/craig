import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './style/HeaderNav.css';

class MenuNav extends React.Component {
  render() {
    return (
      <Navbar className="nav_zero_bottom">
        <Navbar.Header className="nav_right_pad">
          <Navbar.Brand>
            <a href="/">Logo</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav className="nav_left_pad">
          <NavDropdown id="1" eventKey={1} title="Women" componentClass={Link} href="/shopping" to="/shopping" active={location.pathname === '/shopping'}>
            <MenuItem eventKey={1.1}>Shirt</MenuItem>
            <MenuItem eventKey={1.2}>Shoes</MenuItem>
            <MenuItem eventKey={1.3}>Pants</MenuItem>
          </NavDropdown>
          <NavItem componentClass={Link} href="/shopping" to="/shopping" active={location.pathname === '/shopping'}>
            Girls
          </NavItem>
          <NavItem componentClass={Link} href="/shopping" to="/shopping" active={location.pathname === '/shopping'}>
            Men
          </NavItem>
          <NavItem componentClass={Link} href="/shopping" to="/shopping" active={location.pathname === '/shopping'}>
            Boys
          </NavItem>
          <NavItem componentClass={Link} href="/shopping" to="/shopping" active={location.pathname === '/shopping'}>
            Custom
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default MenuNav;