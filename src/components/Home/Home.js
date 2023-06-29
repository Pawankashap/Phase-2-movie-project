import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "../Home/Home.css"
import myImage from '../../Images/homebanner.jpg'
import myImage1 from '../../Images/homebanner1.jpg'
import myImage2 from '../../Images/homebanner2.jpg'


function Home() {
    return (
      <div className="Home" >
      <AliceCarousel 
          autoPlay
          autoPlayInterval={2500}
      >
        <img src={myImage} className="sliderimg"/>
        <img src={myImage1} className="sliderimg"/>
        <img src={myImage2} className="sliderimg"/>
        
      </AliceCarousel>
    </div>
    )
}

export default Home;
