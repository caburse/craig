import React from 'react';
import MainImage from './images/hip-hop-pop.png';
import './style/Home.css';

const Home = () => {
  return (
    <div className="main_img" >
      <img src={MainImage} width="75%" height="75%" />
    </div>
  );
}

export default Home;