import React from "react";

import Project from "./Project";
import classes from "./Projects.module.css";

import project_one_image from "../../assets/project_covers/crock-pot.jpg";
import project_two_image from "../../assets/project_covers/thermostat.jpg";
import project_three_image from "../../assets/project_covers/black_meerkat.jpg";

const project_one = {
  src: project_one_image,
  id: "1",
  alt: "A Crock Pot",
  title: "Crock Bot",
  description: (
    <React.Fragment>
      <p>
        Crock Bot is a bot created using the Discord JS node module. The bot
        provides my private discord server with additional functionality such as
        a Currency System, Music Functionality, Automated Role Assignment, and
        other features.
      </p>

      <p>
        The bot was created with Node.js v16.14.2. It uses an sqlite3 database
        to keep track of the server's currency.
      </p>

      <p>
        The bot's features are described in depth on the accompanying Github
        page.
      </p>
    </React.Fragment>
  ),
  anchorData: [
    {
      href: "https://github.com/MichaelGeneRuiz/crock-bot",
      title: "Github",
      key: Math.random(),
    },
  ],
};

const project_two = {
  src: project_two_image,
  id: "2",
  alt: "A Thermostat",
  title: "Thermostat Verification",
  description: (
    <React.Fragment>
      <p>
        This project was created to determine whether my household thermostat
        was accurate in its readings.
      </p>

      <p>
        A python script running on a Raspberry Pi 400 was used to gather
        readings from a DHT22 Temperature-Humidity sensor. Another python script
        was used to render the data into a user-friendly format in order to make
        important comparisons.
      </p>

      <p>
        A more in-depth explanation can be found on the accompanying Github
        page.
      </p>
    </React.Fragment>
  ),
  anchorData: [
    {
      href: "https://github.com/MichaelGeneRuiz/Thermostat-Verification",
      title: "Github",
      key: Math.random(),
    },
  ],
};

const project_three = {
  src: project_three_image,
  id: "3",
  alt: "A Screenshot of the Black Meerkat Homepage",
  title: "The Black Meerkat",
  description: (
    <React.Fragment>
      <p>
        This website was initially created as a project for a high school
        Computer Science course. The assignment was to create a website with a
        unique theme that would be graded based on its design and mobile user
        interface.
      </p>

      <p>
        The website was created using HTML and CSS. Javascript was later used to
        add additional functionality to the hamburger menu.
      </p>
    </React.Fragment>
  ),
  anchorData: [
    {
      href: "https://blackmeerkat.netlify.app/",
      title: "Website",
      key: "1",
    },
    {
      href: "https://github.com/MichaelGeneRuiz/Black-Meerkat",
      title: "Github",
      key: "2",
    },
  ],
};

const Projects = () => {
  return (
    <section className={classes.projects}>
      <h1 className={classes.project_intro}>Recent Projects</h1>
      <div className={classes.project_grid}>
        <Project
          src={project_one.src}
          id={project_one.id}
          alt={project_one.alt}
          title={project_one.title}
          description={project_one.description}
          anchorData={project_one.anchorData}
        />
        <Project
          src={project_two.src}
          id={project_two.id}
          alt={project_two.alt}
          title={project_two.title}
          description={project_two.description}
          anchorData={project_two.anchorData}
        />

        <Project
          src={project_three.src}
          id={project_three.id}
          alt={project_three.alt}
          title={project_three.title}
          description={project_three.description}
          anchorData={project_three.anchorData}
        />
      </div>
    </section>
  );
};

export default Projects;
