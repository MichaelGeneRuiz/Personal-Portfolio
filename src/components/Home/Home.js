import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <Container id={props.scrollId} className={classes.home}>
      <Stack gap={4} className={classes["text-container"]}>
        <div className={classes.intro}>Hi. I'm Michael Ruiz.</div>
        <div className={classes.subintro}>
          I'm an aspiring Software Engineer.
        </div>
      </Stack>
    </Container>
  );
};

export default Home;
