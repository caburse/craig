import React from 'react';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import ContactData from './DropData.jsx';
import './style/Contact.css';

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      tTitle: 'Please Select an Issue',
      fTitle: '',
      display: 'none'
    }
  }

  handleSelection( title, topicKey, reasonKey ) {
    this.setState( {
      fTitle: title,
    } )
  }

  handleClick( title, topicId, faqs ) {
    this.setState( {
      items: faqs.map( faq => <MenuItem key={faq.id} onClick={() => this.handleSelection( faq.reason, topicId, faq.id )}>{faq.reason}</MenuItem> ),
      tTitle: title,
      fTitle: faqs[0].reason,
      display: 'block'
    } )
  }

  componentDidMount() { }

  render() {
    return (
      <div className="trim_body">
        <h1>Contact Us</h1>
        <center>
          <DropdownButton title={this.state.tTitle} id="1" key="1" id="contact-reason-button">
            {ContactData.topics().map( t => <MenuItem key={t.id} onClick={() => this.handleClick( t.topic, t.id, t.faqs )}>{t.topic}</MenuItem> )}
          </DropdownButton>
          <DropdownButton style={{ display: this.state.display }} title={this.state.fTitle} id="2" key="2" id="contact-reason-extended-button">
            {this.state.items}
          </DropdownButton>
        </center>
      </div>
    );
  }
}