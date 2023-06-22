import React, { useContext } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { scroller } from "react-scroll";

import DarkmodeContext from "../../store/darkmode-context";
import NavButton from "./NavButton";
import DarkmodeIcon from "./DarkmodeIcon";
import classes from "./NavBar.module.css";

const NavBar = () => {
  const darkmodeCtx = useContext(DarkmodeContext);

  const navigate = useNavigate();
  const location = useLocation();

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

  const awsPageHandler = (e) => {
    e.preventDefault();

    navigate("/AWSCorner");
  };

  return (
    <header
      className={`${classes.navbar} ${darkmodeCtx.isDarkmode && classes.dark}`}
    >
      <DarkmodeIcon />
      <NavButton
        onClick={() => {
          if (location.pathname !== "/") {
            navigate("/");
          } else {
            scrollToSection("section1");
          }
        }}
      >
        Home
      </NavButton>
      {location.pathname === "/" && (
        <NavButton onClick={() => scrollToSection("section2")}>About</NavButton>
      )}
      {location.pathname === "/" && (
        <NavButton onClick={() => scrollToSection("section3")}>
          Projects
        </NavButton>
      )}
      <NavButton onClick={awsPageHandler}>AWS Corner</NavButton>
      <NavButton onClick={githubClickHandler}>Github</NavButton>
    </header>
  );
};

export default NavBar;
