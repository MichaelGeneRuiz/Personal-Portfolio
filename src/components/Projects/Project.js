import { useContext } from "react";

import Card from "../UI/Card";
import DarkmodeContext from "../../store/darkmode-context";
import classes from "./Project.module.css";

const Project = (props) => {
  const darkmodeCtx = useContext(DarkmodeContext);

  const anchors = props.anchorData.map((e) => {
    return (
      <li>
        <a
          href={e.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${classes.project_links} ${
            darkmodeCtx.isDarkmode && classes["dark-theme"]
          }`}
        >
          {e.title}
        </a>
      </li>
    );
  });

  return (
    <Card className={classes.project_box}>
      <img
        src={props.src}
        className={classes.project_image}
        id={props.id}
        alt={props.alt}
      />

      <div className={classes.project_title}>{props.title}</div>

      <div className={classes.project_description}>{props.description}</div>

      <div className={classes.project_links_container}>
        <ul className={classes.no_bullets}>
          <li>{anchors}</li>
        </ul>
      </div>
    </Card>
  );
};

export default Project;
