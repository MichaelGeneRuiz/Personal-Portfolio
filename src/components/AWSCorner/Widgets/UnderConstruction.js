import Container from "react-bootstrap/Container";

import classes from "./UnderConstruction.module.css";

function UnderConstruction() {
  return (
    <Container className={classes.container}>
      <div className={classes.intro}>Under Construction</div>
      <div>Check back later for updates!</div>
    </Container>
  );
}

export default UnderConstruction;
