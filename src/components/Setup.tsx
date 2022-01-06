import React, { FC, useRef, useState } from 'react';
import range from 'lodash/range';
import styled from 'styled-components';

type Props = {
  startSet: React.Dispatch<React.SetStateAction<boolean>>;
  playersSet: React.Dispatch<React.SetStateAction<string[]>>;
  playersCountSet: React.Dispatch<React.SetStateAction<number>>;
  playersCount: number;
  players: string[];
};
const Setup: FC<Props> = ({
  startSet,
  playersSet,
  playersCountSet,
  playersCount,
  players,
}) => {
  return (
    <>
      <Text>Ile graczy?</Text>
      <Container>
        {playersCount > 0 ? (
          <Button onClick={() => playersCountSet((prev) => prev - 1)}>-</Button>
        ) : null}
        <Text>{playersCount}</Text>
        <Button onClick={() => playersCountSet((prev) => prev + 1)}>+</Button>
      </Container>
      {range(playersCount).map((el, i) => {
        return (
          <Input
            key={i}
            type='text'
            placeholder='Imię gracza'
            maxLength={6}
            onChange={(e) =>
              playersSet((prevArr) => {
                return Object.assign([], prevArr, { [el]: e.target.value });
              })
            }
          />
        );
      })}
      {players.length > 1 && !players.includes('') ? (
        <Button onClick={() => startSet(true)}>Rozpocznij grę</Button>
      ) : null}
    </>
  );
};

export default Setup;
export const Button = styled.button`
  border: none;
  outline: none;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  color: rgb(74, 74, 74);
  font-weight: 400;
  box-shadow: rgb(55 71 79 / 20%) 0px 0px 2px, rgb(0 0 0 / 10%) 0px 8px 12px;
  max-width: 200px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  padding: 14px 16px;
  margin: 0 4px;
`;
export const Text = styled.div`
  font-size: 18px;
  margin: 0 4px;
  white-space: pre;
  text-align: center;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;
export const Input = styled.input`
  margin: 8px 0;
  border: none;
  outline: none;
  box-shadow: rgb(55 71 79 / 20%) 0px 0px 2px, rgb(0 0 0 / 10%) 0px 8px 12px;
  font-size: 20px;
  padding: 4px;
`;
