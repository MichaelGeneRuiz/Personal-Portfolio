import { useContext } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

import DarkmodeContext from "../../store/darkmode-context";
import classes from "./Project.module.css";

const Project = (props) => {
  const darkmodeCtx = useContext(DarkmodeContext);

  const anchors = props.anchorData.map((e, i) => {
    return (
      <Button
        href={e.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${classes.project_buttons} ${
          darkmodeCtx.isDarkmode && classes["dark-theme"]
        }`}
        key={i}
      >
        {e.title}
      </Button>
    );
  });

  return (
    <Row className={classes.project_box}>
      <Col>
        <div className={classes.project_title}>{props.title}</div>

        <div className={classes.project_description}>{props.description}</div>

        <Stack direction="horizontal" gap={2}>
          {anchors}
        </Stack>
      </Col>
      <Col>
        <Image
          fluid
          rounded
          src={props.src}
          className={classes.project_image}
          id={props.id}
          alt={props.alt}
        />
      </Col>
    </Row>
  );
};

export default Project;
