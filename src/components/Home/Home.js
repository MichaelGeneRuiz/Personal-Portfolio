import React from "react";

import classes from "./Home.module.css";

const Home = () => {
  return (
    <section className={classes.home}>
      <div className={classes.intro}>Hi. I'm Michael Ruiz.</div>
      <div className={classes.subintro}>
        I'm a Computer Engineering student at the NYU Tandon School of
        Engineering.
      </div>
    </section>
  );
};

export default Home;
