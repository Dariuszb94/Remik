import React, { FC, useState } from "react";
import styled from "styled-components";

type Props = {
  player: string;
};
const PlayerScore: FC<Props> = ({ player }) => {
  const [scores, scoresSet] = useState<number[]>([]);
  const [score, scoreSet] = useState(0);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    scoresSet((oldArray) => [...oldArray, score]);
    scoreSet(0);
  };
  const sum = scores.reduce((a, b) => a + b, 0);

  return (
    <div>
      {player}
      {scores.map((el) => {
        return <div>{el}</div>;
      })}
      {sum}
      <form onSubmit={handleSubmit}>
        <Input
          type="number"
          onChange={(e) => scoreSet(Number(e.target.value))}
          value={score}
        />
        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
};

export default PlayerScore;
const Input = styled.input`
  max-width: 60px;
`;
