import React from 'react';
import MainImage from './images/hip-hop-pop.png';
import Slider from 'react-slick';
import './style/Home.css';

const Home = () => {
  var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <div className="main_img">
      <Slider {...settings}>
        <div><img src="http://placehold.it/500x500/ffffff/c0392b/&text=slide1" /></div>
        <div><img src="http://placehold.it/500x500/ffffff/c0392b/&text=slide2" /></div>
        <div><img src="http://placehold.it/500x500/ffffff/c0392b/&text=slide3" /></div>
        <div><img src="http://placehold.it/500x500/ffffff/c0392b/&text=slide4" /></div>
        <div><img src="http://placehold.it/500x500/ffffff/c0392b/&text=slide5" /></div>
        <div><img src="http://placehold.it/500x500/ffffff/c0392b/&text=slide6" /></div>
        <div><img src={MainImage} width="500px" height="500px" /></div>
      </Slider>
    </div>
  );
}

export default Home;