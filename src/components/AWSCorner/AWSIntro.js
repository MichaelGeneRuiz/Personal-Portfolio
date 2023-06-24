import Container from "react-bootstrap/Container";

import classes from "./AWSIntro.module.css";

function AWSIntro(props) {
  return (
    <Container id={props.scrollId} className={classes.container}>
      <div className={classes.intro}>The AWS Corner</div>
      <div className={classes.subintro}>
        For widgets created using Amazon Web Services.
      </div>
    </Container>
  );
}

export default AWSIntro;
