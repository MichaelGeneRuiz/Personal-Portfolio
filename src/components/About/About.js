import React from "react";
import classes from "./About.module.css";
import Card from "../UI/Card";

import about_image_one from "../../assets/about_images/boardgames.jpg";
import about_image_two from "../../assets/about_images/setup.jpg";
import about_image_three from "../../assets/about_images/nycfc.jpeg";


const About = () => {
  return (
    <section className={classes.about}>
      <h1 className={classes.about_intro}>About Me</h1>
      <div className={classes.about_row}>
        <Card className={classes.about_card}>
          <div className={classes.about_text}>
            <p>
              I am an aspiring Computer Engineer currently studying at the NYU
              Tandon School of Engineering. I am passionate about board games,
              video games, and soccer.
            </p>

            <p>
              I decided to pursue Computer Engineering because of my fascination
              with both computer hardware and software. I have taken many fundamental
              courses such as Data Structures and Algorithms as well as Object
              Oriented Programming.
            </p>

            <p>
              I am mostly experienced with JavaScript (Node, React, Next). 
              I also have experience using Git and MongoDB as well as some minor
              experience with Python.
            </p>
          </div>
        </Card>
        <div className={classes.about_images}>
            <img src={about_image_one} alt="" />
            <img src={about_image_two} alt="" />
            <img src={about_image_three} alt="" />
          </div>
      </div>
    </section>
  );
};

export default About;
