import React, { useState } from "react";
import styled from "styled-components";
import Setup from "./components/Setup";
import _uniqueId from "lodash/uniqueId";
import PlayerScore from "./components/PlayerScore";

function App() {
  const [start, startSet] = useState(false);
  const [players, playersSet] = useState<string[]>([]);

  return (
    <Container>
      {!start && (
        <Setup startSet={startSet} playersSet={playersSet} players={players} />
      )}
      {console.log(start)}
      {start && (
        <Row>
          {players.map((player) => {
            const id = _uniqueId("prefix-");

            return (
              <div key={id}>
                <PlayerScore player={player} />
              </div>
            );
          })}
        </Row>
      )}
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Row = styled.div`
  display: flex;
`;
