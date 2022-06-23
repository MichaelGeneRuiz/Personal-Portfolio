import { useContext } from "react";

import DarkmodeContext from "../../store/darkmode-context";
import classes from "./DarkmodeIcon.module.css";

const DarkmodeIcon = () => {
  const darkmodeCtx = useContext(DarkmodeContext);

  return (
    <img
      className={`${classes.darkmode_icon} ${
        darkmodeCtx.isDarkmode && classes["dark-theme"]
      }`}
      alt="Darkmode Icon"
      onClick={darkmodeCtx.onToggle}
    />
  );
};

export default DarkmodeIcon;
