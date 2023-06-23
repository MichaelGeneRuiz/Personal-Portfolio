import { useState } from "react";

import Container from "react-bootstrap/Container";

function HourlyPokemon() {
  const currentPokemon = useState({});

  async function fetchPokemon() {
    const res = await fetch(
      "https://nl2rxqz2gg.execute-api.us-east-2.amazonaws.com/default/fetchPokemon"
    );

    if (res.ok) {
      const data = await res.json();

      console.log(data);
    }
  }

  return (
    <Container>
      <div>Hourly Pokemon</div>
      <button onClick={fetchPokemon}>Click</button>
    </Container>
  );
}

export default HourlyPokemon;
