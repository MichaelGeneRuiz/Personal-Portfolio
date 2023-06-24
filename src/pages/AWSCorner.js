import Container from "react-bootstrap/Container";

import AWSIntro from "../components/AWSCorner/AWSIntro";
import Widgets from "../components/AWSCorner/Widgets";

function AWSCorner() {
  return (
    <Container>
      <AWSIntro scrollId="section4" />
      <hr />
      <Widgets />
    </Container>
  );
}

export default AWSCorner;
