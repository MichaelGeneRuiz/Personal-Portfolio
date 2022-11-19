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
              Tandon School of Engineering. I am passionate about software
              engineering, web development, board games, video games, and
              soccer.
            </p>

            <p>
              I decided to pursue Computer Engineering because of my fascination
              with both computer hardware and software. I have taken many
              courses such as Data Structures and Algorithms, OOP, Embedded
              Systems, Databases, and more.
            </p>

            <p>
              I am also currently pursuing a minor in Science and Technology
              Studies.
            </p>

            <hr />

            <ul>
              <span>Skills: </span>
              <li>
                <p>
                  Languages: JavaScript (ReactJS, NodeJS, NextJS), Python, C,
                  C++
                </p>
              </li>
              <li>
                <p>Databases: MongoDB, MySQL</p>
              </li>
              <li>
                <p>Tools: Git</p>
              </li>
            </ul>
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
