import React from "react";
import ProjectItem from "./project_item";
import help from "../images/help.jpg";
import mazeSpinner from "../images/maze_spinner.png";
import NBAStats from "../images/nba_stats.png";
import MasterDomain from "../images/master_of_the_domain.png";
import StockStudy from "../images/stock_study.png";
import Carousel from "../images/carousel.png";
import Overflow from "../images/overflow.png";
import tictactoe from "../images/tictactoe.png";
import WordLadder from "../images/wordladder.png";
import Connect4 from "../images/connect4.png";
import Calculator from "../images/calculator.png";
import "./project_index.css";
import $ from "jquery";
import background from "../images/back.jpg";

class ProjectIndex extends React.Component {
  render() {
    return (
      <div className="all-projects-container">
        <ProjectItem
          title={"Help"}
          liveLink={"https://www.corey-ladovsky-help.club"}
          repoLink={"https://github.com/coreyladovsky/help"}
          description={
            "A single page application in the style of Yelp where users are able to rate and review restaurants. Built with Rails, React, Redux, AWS, CSS3, HTML5, and PostgreSQL"
          }
          image={help}
          facon={"icon fa fas fa-utensils"}
          orderFirst="firstImg"
          orderSecond="secondImg"
        />
        <ProjectItem
          title={"Maze Spinner"}
          liveLink={"https://www.coreyladovsky.com/Maze-Spinner/"}
          repoLink={"https://github.com/coreyladovsky/Maze-Spinner"}
          description={
            "Navigate your way through multiple mazes while they randomly rotate. Built with JavaScript, HTML5, jQuery, and Canvas."
          }
          image={mazeSpinner}
          facon={"icon fa fa-gamepad"}
          orderFirst="secondImg"
          orderSecond="firstImg"
        />
        <ProjectItem
          title={"NBA Stats By The Minute 2017"}
          liveLink={"https://nba-stats-corey-ladovsky.herokuapp.com"}
          repoLink={"https://github.com/coreyladovsky/bball"}
          description={
            "An NBA data visualization done with d3 inside of a react redux app."
          }
          image={NBAStats}
          facon={"icon fab fa-dribbble"}
          orderFirst="firstImg"
          orderSecond="secondImg"
        />
        <ProjectItem
          title={"Master Of The Domain"}
          liveLink={"https://www.coreyladovsky.com/Master-Of-The-Domain/"}
          repoLink={"https://github.com/coreyladovsky/Master-Of-The-Domain"}
          description={
            "Master Of The Domain is a JavaScript DOM manipulator inspired by the wonderful jQuery. Demonstrated as a snake game."
          }
          image={MasterDomain}
          facon={"icon fa fa-code"}
          orderFirst="secondImg"
          orderSecond="firstImg"
        />
        <ProjectItem
          title={"Stock Study"}
          liveLink={"https://www.coreyladovsky.com/stock_study/"}
          repoLink={"https://github.com/coreyladovsky/stock_study"}
          description={
            "A d3 data visualization of five stocks and their performace over the past week."
          }
          image={StockStudy}
          facon={"icon fa fas fa-chart-line"}
          orderFirst="firstImg"
          orderSecond="secondImg"
        />
        <ProjectItem
          title={"Carousel"}
          liveLink={"https://www.coreyladovsky.com/Carousel/"}
          repoLink={"https://github.com/coreyladovsky/Carousel"}
          description={"A responsive photo carousel made with React."}
          image={Carousel}
          facon={"icon fa fa-camera-retro"}
          orderFirst="secondImg"
          orderSecond="firstImg"
        />
        <ProjectItem
          title={"Overflow"}
          liveLink={"https://www.coreyladovsky.com/overflow-game/"}
          repoLink={"https://github.com/coreyladovsky/overflow-game"}
          description={
            "An interactive and highly addictive color changing game made with React"
          }
          image={Overflow}
          facon={"icon fa fa-gamepad"}
          orderFirst="firstImg"
          orderSecond="secondImg"
        />
        <ProjectItem
          title={"WordLadder"}
          liveLink={"https://www.coreyladovsky.com/wordLadder/"}
          repoLink={"https://github.com/coreyladovsky/wordLadder"}
          description={"A JavaScript word network that finds the shortest path between two words of equal length changing only one character at a time."}
          image={WordLadder}
          facon={"icon fa fa-book"}
          orderFirst="secondImg"
          orderSecond="firstImg"
        />
        <ProjectItem
          title={"Connect 4"}
          liveLink={"http://www.coreyladovsky.com/connect4/"}
          repoLink={"https://github.com/coreyladovsky/connect4"}
          description={
            "A classic childhood game built with Object Oriented JavaScript"
          }
          image={Connect4}
          facon={"icon fa fa-gamepad"}
          orderFirst="firstImg"
          orderSecond="secondImg"
        />
        <ProjectItem
          title={"Calculator"}
          liveLink={"http://www.coreyladovsky.com/calculator/"}
          repoLink={"https://github.com/coreyladovsky/calculator"}
          description={"A React calulator with identical behaivor to the popular Iphone calulator."}
          image={Calculator}
          facon={"icon fa fa-book"}
          orderFirst="secondImg"
          orderSecond="firstImg"
        />
        <ProjectItem
          title={"TickyTacky"}
          liveLink={"https://www.coreyladovsky.com/tickyTacky/"}
          repoLink={"https://github.com/coreyladovsky/tickyTacky"}
          description={
            "An all JavaScript two player tic tac toe game."
          }
          image={tictactoe}
          facon={"icon fa fa-gamepad"}
          orderFirst="firstImg"
          orderSecond="secondImg"
        />
      </div>
    );
  }
}

export default ProjectIndex;
