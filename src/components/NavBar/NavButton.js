import { useContext } from "react";

import classes from "./NavButton.module.css";

import DarkmodeContext from "../../store/darkmode-context";

const NavButton = (props) => {
  const darkmodeCtx = useContext(DarkmodeContext);

  return (
    <button
      className={`${classes.button} ${darkmodeCtx.isDarkmode && classes.dark}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default NavButton;
