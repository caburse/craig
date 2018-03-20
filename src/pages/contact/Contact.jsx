import React from 'react';
import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';
import './style/Contact.css';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="trim_body">
        <h1>Contact Us</h1>
        <center>
          <DropdownButton id="1" title="Please Select an Issue" key="1">
            <MenuItem eventKey="1.1" active>Orders</MenuItem>
            <MenuItem eventKey="1.2">Returns</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="1.3">Shipping</MenuItem>
            <MenuItem eventKey="1.4">Shopping on suckafree.com</MenuItem>
          </DropdownButton>
          <DropdownButton id="2" title="">
          </DropdownButton>
        </center>
      </div>
    );
  }
}