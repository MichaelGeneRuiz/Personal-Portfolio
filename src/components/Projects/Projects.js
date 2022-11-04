import React from "react";

import Project from "./Project";
import classes from "./Projects.module.css";

import project_one_image from "../../assets/project_covers/crock-pot.jpg";
import project_two_image from "../../assets/project_covers/thermostat.jpg";
import project_three_image from "../../assets/project_covers/black_meerkat.jpg";
import project_four_image from "../../assets/project_covers/mls-stats.PNG";

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
        a Currency System, Music Player Functionality, Automated Role
        Assignment, and other features.
      </p>

      <p>
        The bot was created with Node.js. It uses an sqlite3 database to keep
        track of the server's currency distribution.
      </p>

      <p>
        The bot's features are described in depth on the accompanying Github
        page.
      </p>
    </React.Fragment>
  ),
  anchorData: [
    {
      href: "https://github.com/MichaelGeneRuiz/Crock-Bot",
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
        This project was an embedded system project created to verify my
        household thermostat's temperature and humidity readings.
      </p>

      <p>
        A python script running on a Raspberry Pi was used to gather readings
        from a DHT22 Temperature-Humidity sensor. Another script was used to
        transform the data into a readable format.
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
        This website was created as a project for a high school Computer Science
        course. The assignment was to create a website with a unique theme that
        would be graded based on its design and mobile user interface.
      </p>

      <p>
        The website was created using HTML and CSS. Javascript was added later
        to provide additional functionality to the hamburger menu.
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

const project_four = {
  src: project_four_image,
  id: "4",
  alt: "A Screenshot of the MLS Stats Homepage",
  title: "MLS Stats",
  description: (
    <React.Fragment>
      <p>
        This site provides the current standings and up-to-date statistics for
        every MLS team. New stats are pulled from the API at most once per day,
        and the standings are updated at most once an hour. The data pulled from
        the API is stored onto a MongoDB database, which provides that data to
        the website.
      </p>

      <p>The site was created using a combination of NextJS and MongoDB.</p>

      <p>
        The site's source code can be found on the accompanying Github page.
      </p>
    </React.Fragment>
  ),
  anchorData: [
    {
      href: "https://mls-stats.vercel.app/",
      title: "Website",
      key: "1",
    },
    {
      href: "https://github.com/MichaelGeneRuiz/mls-stats",
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
          src={project_four.src}
          id={project_four.id}
          alt={project_four.alt}
          title={project_four.title}
          description={project_four.description}
          anchorData={project_four.anchorData}
        />
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
