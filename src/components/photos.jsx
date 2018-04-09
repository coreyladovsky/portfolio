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
          <div>
            <img src={photo1} alt="" />
          </div>
          <div>
            <img src={photo2} alt="" />
          </div>
          <div>
            <img src={photo3} alt="" />
          </div>
          <div>
            <img src={photo4} alt="" />
          </div>
          <div>
            <img src={photo5} alt="" />
          </div>
          <div>
            <img src={photo6} alt="" />
          </div>
          <div>
            <img src={photo7} alt="" />
          </div>
          <div>
            <img src={photo8} alt="" />
          </div>
          <div>
            <img src={photo9} alt="" />
          </div>

        </Slider>
      </div>
    );
  }
}

export default PhotoSlider;
