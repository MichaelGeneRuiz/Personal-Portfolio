import Container from "react-bootstrap/Container";

import classes from "./ErrorMessage.module.css";

function ErrorMessage() {
  return (
    <Container className={classes.container}>
      <div className={classes.text}>Sorry! That page does not exist.</div>
    </Container>
  );
}

export default ErrorMessage;
