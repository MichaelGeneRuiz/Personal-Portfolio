import { useState, useEffect, useCallback } from "react";

import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

import classes from "./HourlyPokemon.module.css";

function HourlyPokemon() {
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchPokemon = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://nl2rxqz2gg.execute-api.us-east-2.amazonaws.com/default/fetchPokemon"
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      setCurrentPokemon(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]);

  return (
    <Container className={classes.container}>
      <div className={classes.intro}>Hourly Pokemon</div>
      <div>Randomly generates a Generation 1-10 Pokemon every hour.</div>
      {loading && (
        <Spinner
          style={{
            alignSelf: "center",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        />
      )}
      {!loading && (
        <div className={classes["poke-container"]}>
          <img
            className={classes["poke-image"]}
            src={currentPokemon.sprite}
            alt="(no sprite)"
          />
          <div>{currentPokemon.species}</div>
          <div>
            Click{" "}
            <a
              href={currentPokemon.bulbapedia}
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>{" "}
            for more info on {currentPokemon.species}!
          </div>
        </div>
      )}
    </Container>
  );
}

export default HourlyPokemon;
