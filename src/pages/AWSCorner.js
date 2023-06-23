import Container from "react-bootstrap/Container";

import TableOfContents from "../components/AWSCorner/TableOfContents";
import Widgets from "../components/AWSCorner/Widgets";

function AWSCorner() {
  return (
    <Container>
      <TableOfContents />
      <Widgets />
    </Container>
  );
}

export default AWSCorner;
