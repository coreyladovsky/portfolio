import React, { Component } from "react";
import Slider from "react-slick";
import photo1 from "../images/small_pic.jpg";
import photo2 from "../images/headshot.jpg";
import photo3 from "../images/tiedie.jpg";
import photo4 from "../images/catpic.jpg";
import photo5 from "../images/pic4.jpg";
import photo6 from "../images/pic5.jpg";
import photo7 from "../images/pic6.jpg";
import photo8 from "../images/pic7.jpg";
import photo9 from "../images/pic8.jpg";
import photo10 from "../images/noboru.jpg";
import photo11 from "../images/dashiki.jpg";
import "./photo.css";

class PhotoSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <img className="photo-carousel" src={photo1} alt="" />

          <img className="photo-carousel" src={photo11} alt="" />

          <img className="photo-carousel" src={photo2} alt="" />

          <img className="photo-carousel" src={photo3} alt="" />

          <img className="photo-carousel" src={photo4} alt="" />

          <img className="photo-carousel" src={photo5} alt="" />

          <img className="photo-carousel" src={photo6} alt="" />

          <img className="photo-carousel" src={photo7} alt="" />

          <img className="photo-carousel" src={photo8} alt="" />

          <img className="photo-carousel" src={photo9} alt="" />

          <img className="photo-carousel" src={photo10} alt="" />
        </Slider>
      </div>
    );
  }
}

export default PhotoSlider;
