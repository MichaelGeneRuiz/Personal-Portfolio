import Container from "react-bootstrap/Container";

import Project from "./Project";
import classes from "./Projects.module.css";

import project_one_image from "../../assets/project_covers/crock-pot.jpg";
import project_two_image from "../../assets/project_covers/thermostat.jpg";
import project_three_image from "../../assets/project_covers/black_meerkat.jpg";
import project_four_image from "../../assets/project_covers/mls-stats.PNG";
import project_five_image from "../../assets/project_covers/Metaprint.png";

const project_one = {
  src: project_one_image,
  id: "1",
  alt: "A Crock Pot",
  title: "Crock Bot",
  description: (
    <p>
      Crock Bot is a chat bot created using the Discord JS node module. The bot
      provides my discord server with additional functionality such as a
      Currency System, Music Player Functionality, Automated Role Assignment,
      and other features.
    </p>
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
    <p>
      This project was an embedded systems project created to verify my
      household thermostat's temperature and humidity readings. A python script
      running on a Raspberry Pi was used to gather readings from a DHT22
      Temperature-Humidity sensor every hour.
    </p>
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
    <p>
      This website was created as a project for a high school Computer Science
      course. The assignment was to create a website with a unique theme that
      would be graded based on its design and mobile user interface.
    </p>
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
    <p>
      This site provides the standings and statistics for every MLS team in 
      2022. (NOTE: The API has disallowed updates past the year 2022.)
      New stats are pulled from the API at most once per day,
      and the standings are updated at most once an hour. The data pulled from
      the API is stored onto a MongoDB database, which provides that data to the
      website.
    </p>
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

const project_five = {
  src: project_five_image,
  id: "5",
  alt: "A Screenshot of the Metaprint Homepage",
  title: "Metaprint",
  description: (
    <p>
      Metaprint is the final product of my Software Engineering Design Project.
      Myself and three classmates utilized the Agile methodology to create a web
      application that keeps track of your personal carbon footprint. Users can
      track their activities that generate emissions, receive tips and tricks on
      how to reduce these emissions, as well as compare their emissions to those
      of all Metaprint users.
    </p>
  ),
  anchorData: [
    {
      href: "https://github.com/MichaelGeneRuiz/Metaprint",
      title: "Github",
      key: "1",
    },
  ],
};

const Projects = (props) => {
  return (
    <Container id={props.scrollId} className={classes.projects}>
      <h1 className={classes.project_intro}>Recent Projects</h1>
      <Container>
        <Project
          src={project_five.src}
          id={project_five.id}
          alt={project_five.alt}
          title={project_five.title}
          description={project_five.description}
          anchorData={project_five.anchorData}
        />
        <hr />
        <Project
          src={project_four.src}
          id={project_four.id}
          alt={project_four.alt}
          title={project_four.title}
          description={project_four.description}
          anchorData={project_four.anchorData}
        />
        <hr />
        <Project
          src={project_one.src}
          id={project_one.id}
          alt={project_one.alt}
          title={project_one.title}
          description={project_one.description}
          anchorData={project_one.anchorData}
        />
        <hr />
        <Project
          src={project_two.src}
          id={project_two.id}
          alt={project_two.alt}
          title={project_two.title}
          description={project_two.description}
          anchorData={project_two.anchorData}
        />
        {/* <hr />
        <Project
          src={project_three.src}
          id={project_three.id}
          alt={project_three.alt}
          title={project_three.title}
          description={project_three.description}
          anchorData={project_three.anchorData}
        /> */}
      </Container>
    </Container>
  );
};

export default Projects;
