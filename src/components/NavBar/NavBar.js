import React, { useContext } from "react";

import { scroller } from "react-scroll";

import DarkmodeContext from "../../store/darkmode-context";
import NavButton from "./NavButton";
import DarkmodeIcon from "./DarkmodeIcon";
import classes from "./NavBar.module.css";

const NavBar = () => {
  const darkmodeCtx = useContext(DarkmodeContext);

  const scrollToSection = (sectionId) => {
    
    scroller.scrollTo(sectionId, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -50,
    });
  };

  const githubClickHandler = (e) => {
    e.preventDefault();
    window.open("https://github.com/MichaelGeneRuiz");
  };

  return (
    <header
      className={`${classes.navbar} ${darkmodeCtx.isDarkmode && classes.dark}`}
    >
      <DarkmodeIcon />
      <NavButton onClick={() => scrollToSection("section1")}>Home</NavButton>
      <NavButton onClick={() => scrollToSection("section2")}>About</NavButton>
      <NavButton onClick={() => scrollToSection("section3")}>Projects</NavButton>
      <NavButton onClick={githubClickHandler}>Github</NavButton>
    </header>
  );
};

export default NavBar;
