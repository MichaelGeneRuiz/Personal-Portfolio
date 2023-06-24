import { useState, useEffect, useCallback } from "react";

import Container from "react-bootstrap/Container";

import classes from "./HourlyPokemon.module.css";

function HourlyPokemon() {
  const [currentPokemon, setCurrentPokemon] = useState({});

  const fetchPokemon = useCallback(async () => {
    try {
      const res = await fetch(
        "https://nl2rxqz2gg.execute-api.us-east-2.amazonaws.com/default/fetchPokemon"
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      console.log(data);

      setCurrentPokemon(data);
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
      <div>Generates a new Pokemon every hour.</div>
      {!currentPokemon && <div>Loading...</div>}
      {currentPokemon && (
        <div className={classes["poke-container"]}>
          <img
            className={classes["poke-image"]}
            src={currentPokemon.sprite}
            alt="Loading..."
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
