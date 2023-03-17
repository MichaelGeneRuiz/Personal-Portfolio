import { Fragment } from "react";

import Container from "react-bootstrap/Container";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: 50 }}>
        <Home scrollId="section1" />
        <About scrollId="section2" />
        <Projects scrollId="section3" />
      </Container>
    </Fragment>
  );
}

export default App;
