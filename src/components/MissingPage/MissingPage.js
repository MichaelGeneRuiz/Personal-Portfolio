import classes from "./MissingPage.module.css";

const MissingPage = () => {
  return (
    <section className={classes.missing}>
      <h1 className={classes.missing_text}>That page does not exist.</h1>
    </section>
  );
};

export default MissingPage;
