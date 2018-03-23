import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import Logo from './images/sf_logo.png';
import './style/HeaderNav.css';

class MenuNav extends React.Component {

  handleClick( url ) {
    return () => {
      this.props.history.push( url );
    }
  }

  render() {
    return (
      <Navbar className="nav_zero_bottom">
        <Navbar.Header className="nav_right_pad">
          <Navbar.Brand>
            <a onClick={this.handleClick('/')}><img src={Logo} width="50px" height="50px" /></a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav className="nav_left_pad">
          <NavDropdown id="1" eventKey={1} title="Women" onClick={this.handleClick( '/shopping/women' )} active={location.pathname === '/shopping/women'}>
            <MenuItem onClick={this.handleClick( '/shopping/women/shirt' )} eventKey={1.1}>Shirt</MenuItem>
            <MenuItem onClick={this.handleClick( '/shopping/women/shoes' )} eventKey={1.2}>Shoes</MenuItem>
            <MenuItem onClick={this.handleClick( '/shopping/women/pants' )} eventKey={1.3}>Pants</MenuItem>
          </NavDropdown>
          <NavDropdown id="2" eventKey={2} title="Girls" onClick={this.handleClick( '/shopping/girls' )} active={location.pathname === '/shopping/girls'}>
            <MenuItem eventKey={2.1}>Shirt</MenuItem>
            <MenuItem eventKey={2.2}>Shoes</MenuItem>
            <MenuItem eventKey={2.3}>Pants</MenuItem>
          </NavDropdown>
          <NavDropdown id="3" eventKey={3} title="Men" onClick={this.handleClick( '/shopping/men' )} active={location.pathname === '/shopping/men'}>
            <MenuItem eventKey={3.1}>Shirt</MenuItem>
            <MenuItem eventKey={3.2}>Shoes</MenuItem>
            <MenuItem eventKey={3.3}>Pants</MenuItem>
          </NavDropdown>
          <NavDropdown id="4" eventKey={4} title="Boys" onClick={this.handleClick( '/shopping/boys' )} active={location.pathname === '/shopping/boys'}>
            <MenuItem eventKey={4.1}>Shirt</MenuItem>
            <MenuItem eventKey={4.2}>Shoes</MenuItem>
            <MenuItem eventKey={4.3}>Pants</MenuItem>
          </NavDropdown>
          <NavDropdown id="5" eventKey={5} title="Custom" onClick={this.handleClick( '/shopping/custom' )} active={location.pathname === '/shopping/custom'}>
            <MenuItem eventKey={5.1}>Shirt</MenuItem>
            <MenuItem eventKey={5.2}>Shoes</MenuItem>
            <MenuItem eventKey={5.3}>Pants</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default withRouter( MenuNav );