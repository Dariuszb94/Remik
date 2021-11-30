import React, { useState } from "react";

import styled from "styled-components";
import Setup from "./components/Setup";
function App() {
  const [start, startSet] = useState(false);
  const [players, playersSet] = useState<String[]>([]);

  return (
    <Container>
      {!start && <Setup startSet={startSet} playersSet={playersSet} />}
      {console.log(start)}
      {start && (
        <Row>
          {players.map((player) => {
            return <div>{player}</div>;
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
