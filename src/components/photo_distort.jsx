import React from 'react';
import "./photo_distort.css";
import Warp  from "warpjs";

class Distort extends React.Component {
  render () {
    const svg = document.getElementById('svg-element');
    const warp = new Warp(svg);
    //
    // svg.addEventListener("mouseover", (e) => {
    // 	let x = e.clientX;
    // 	let y = e.clientY;
    // warp.transform(([ x, y ]) => [ x, y + 4 * Math.sin(x / 16) ])
    // })

    return(
      <svg id="svg-element"></svg>
    );
  }
}

export default Distort  ;
