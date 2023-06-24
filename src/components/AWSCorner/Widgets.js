import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import HourlyPokemon from "./Widgets/HourlyPokemon";
import UnderConstruction from "./Widgets/UnderConstruction";

import classes from "./Widgets.module.css";

function Widgets() {
  return (
    <Container className={classes.container}>
      <Row xs={1} md={2}>
        <Col>
          <HourlyPokemon />
        </Col>
        <Col>
          <UnderConstruction />
        </Col>
      </Row>
    </Container>
  );
}

export default Widgets;
