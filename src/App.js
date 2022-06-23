import { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import MissingPage from "./components/MissingPage/MissingPage";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<MissingPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
