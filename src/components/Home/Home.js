import React from "react";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import myImage from '../../Images/homebanner.jpg'
import "../Home/Home.css"
import { Carousel } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Home() {
    const CustomArrow = ({ className, onClick }) => (
        <button
          className={`slick-arrow ${className}`}
          onClick={onClick}
          style={{ color: 'black',fontSize:'30px' }}
        />
      );

    const settings = {
        dots: true,
        infinite: true,
        speed: 10,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomArrow className="slick-prev" />,
        nextArrow: <CustomArrow className="slick-next" />
      };
   


    return (
        <Container>
        <Slider {...settings}>
      <div>
        <img src={myImage} alt="Slide 1" />
      </div>
      <div>
        <img src={myImage} alt="Slide 2" />
      </div>
      <div>
        <img src={myImage} alt="Slide 3" />
      </div>
      {/* Add more slide items as needed */}
    </Slider>
    </Container>
    )
}

export default Home;
