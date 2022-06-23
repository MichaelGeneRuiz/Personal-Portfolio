import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import DarkmodeContext from "../../store/darkmode-context";
import NavButton from "./NavButton";
import DarkmodeIcon from "./DarkmodeIcon";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  const darkmodeCtx = useContext(DarkmodeContext);
  const navigate = useNavigate();

  const homeClickHandler = (e) => {
    e.preventDefault();
    navigate("/home", { replace: true });
  };

  const aboutClickHandler = (e) => {
    e.preventDefault();
    navigate("/about", { replace: true });
  };

  const projectClickHandler = (e) => {
    e.preventDefault();
    navigate("/projects", { replace: true });
  };

  const githubClickHandler = (e) => {
    e.preventDefault();
    window.open("https://github.com/MichaelGeneRuiz");
  };

  return (
    <React.Fragment>
      <header
        className={`${classes.navbar} ${
          darkmodeCtx.isDarkmode && classes.dark
        }`}
      >
        <DarkmodeIcon />
        <NavButton onClick={homeClickHandler}>Home</NavButton>
        <NavButton onClick={aboutClickHandler}>About</NavButton>
        <NavButton onClick={projectClickHandler}>Projects</NavButton>
        <NavButton onClick={githubClickHandler}>Github</NavButton>
      </header>
    </React.Fragment>
  );
};

export default NavBar;
