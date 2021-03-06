import React from 'react';
import HeaderNav from '../header/HeaderNav.jsx';
import FooterNav from '../footer/FooterNav.jsx';
import Flow from '../flow/Flow.jsx';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

const Main = () => {
  return (
    <div>
      <StickyHeader
        header={
          <HeaderNav />
        } />
      <Flow />
      <FooterNav />
    </div>
  );
}

export default Main