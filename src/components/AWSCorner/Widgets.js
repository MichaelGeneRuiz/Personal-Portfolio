import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import HourlyPokemon from "./Widgets/HourlyPokemon";

function Widgets() {
  return (
    <Container>
      <Row>
        <Col>
          <HourlyPokemon />
        </Col>
      </Row>
    </Container>
  );
}

export default Widgets;
