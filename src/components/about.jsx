import React from "react";
import PhotoSlider from "./photos";
import "./about.css";
import $ from "jquery";
import background from "../images/backg.jpg";

class About extends React.Component {
  componentDidMount() {
    $(".menu-bars").css("color", "white");

    $("html").css({
      "background-image": "url(" + background + ")",
      "background-size": "cover",
      "background-position": "100% 54%"
    });
  }

  render() {
    return (
      <div className="about-container">
        <h1>COREY LADOVSKY</h1>
        <h3>Software Engineer</h3>
        <div className="about-section">
          <PhotoSlider />
          <div>
            <h2>THE WHY</h2>
            <p className="bio">
              I originally moved to New York to be a professional musican and
              writer. As an artist, I am always looking for inspiration in
              everything; I look for that special something that ignites a spark
              in the depths of my being and stirs the pot of creativity. One day
              a friend of mine suggested that I should try programming. That
              evening I sat behind my computer and began to learn Ruby. I was
              doing simple things, but they felt rewarding and fun. I began to
              teach myself (with the aid of wonderful online resources) more and
              more code; I couldn't stop. Coding is a passion that I hadn't
              realized that I'd always had. It was so similar to writing. The
              process of getting my thoughts and ideas out, the refactoring, the
              trying to complete the puzzles. I was fast to falling in love with
              programming and we've been together ever since.
            </p>
          </div>
        </div>
        <div />
        <div className="about-bonus">
          <p className="bio">
            In addition to my programming skills, I have a history as a trained
            improviser. This gives me the ability to think quickly on my feet,
            work well with others, and be extremely flexible to fast changing
            environments and situations. I love rainy weather and singing in the
            sunshine.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
