import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home.jsx';
import Cart from '../cart/Cart.jsx';
import Contact from '../contact/Contact.jsx';
import About from '../about/About.jsx';
import Shopping from '../shopping/Shopping.jsx';
import Donate from '../donate/Donate.jsx';

export default class Flow extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />
          <Route path='/shopping' component={Shopping} />
          <Route exact path='/donate' component={Donate} />
        </Switch>
      </main>
    );
  }
}