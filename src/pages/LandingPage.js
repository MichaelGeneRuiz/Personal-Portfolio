import Container from "react-bootstrap/Container";

import Home from "../components/Home/Home";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";

function LandingPage() {
  return (
    <Container>
      <Home scrollId="section1" />
      <About scrollId="section2" />
      <Projects scrollId="section3" />
    </Container>
  );
}

export default LandingPage;
