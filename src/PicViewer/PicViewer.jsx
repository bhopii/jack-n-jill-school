import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./PicViewer.css";

function PicViewer() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="http://placeimg.com/1200/800/nature"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="http://placeimg.com/1200/800/nature"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://placeimg.com/1200/800/nature"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default PicViewer;
