import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

import classes from "./TableOfContents.module.css";

function TableOfContents() {
  return (
    <Container className={classes.container}>
      <div className={classes.intro}>The AWS Corner</div>
      <hr />
      <Stack gap={4} className={classes["info-container"]}>
        <div className={classes.text}>
          This page is for all of my AWS tinkering.
        </div>
      </Stack>
    </Container>
  );
}

export default TableOfContents;
