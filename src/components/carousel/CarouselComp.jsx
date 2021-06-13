import React from "react";
import { Carousel } from "react-bootstrap";

import slideImage1 from "../../assets/webp/21-Days-of-REACH-x.webp";
import slideImage2 from "../../assets/webp/small (1).webp";
import slideImage3 from "../../assets/webp/thumbnail_IMG_0705.webp";

function CarouselComp() {
    const carouselStyle = {
        height:700,
        overflow:"hidden"
    }
  return (
    <Carousel fade>
      <Carousel.Item style={carouselStyle}>
        <img
          className="d-block w-100 carouselImage"
          src={slideImage3}
          alt="First slide"
        />
        <Carousel.Caption className='captionLabel'>
          <h2>You are welcome at</h2>
          <h1>ICGC Joy Temple</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={carouselStyle}>
        <img
          className="d-block w-100 carouselImage"
          src={slideImage2}
          alt="Second slide"
        />

        <Carousel.Caption className='captionLabel'>
          {/* <h1>Second slide label</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={carouselStyle}>
        <img
          className="d-block w-100 carouselImage"
          src={slideImage1}
          alt="Third slide"
        />

        <Carousel.Caption className='captionLabel'>
          {/* <h1>Third slide label</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;
