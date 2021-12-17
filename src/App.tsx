import { useState } from "react";
import styled from "styled-components";
import Setup from "./components/Setup";
import _uniqueId from "lodash/uniqueId";
import PlayerScore from "./components/PlayerScore";

function App() {
  const [start, startSet] = useState(false);
  const [players, playersSet] = useState<string[]>([]);
  const [playersCount, playersCountSet] = useState(0);

  return (
    <Container>
      {!start && (
        <Setup
          startSet={startSet}
          playersSet={playersSet}
          players={players}
          playersCountSet={playersCountSet}
          playersCount={playersCount}
        />
      )}
      {start && (
        <Row>
          {players.map((player) => {
            const id = _uniqueId("prefix-");

            return (
              <div key={id}>
                <PlayerScore player={player} playersCount={playersCount} />
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
  margin-top: 20px;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
`;
