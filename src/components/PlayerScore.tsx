import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Text } from './Setup';
import db from '../firebase';
import firebase from 'firebase';

type Props = {
  player: string;
  playersCount: number;
  index: number;
};
const PlayerScore: FC<Props> = ({ player, playersCount, index }) => {
  const [scores, scoresSet] = useState<number[]>([]);
  const [score, scoreSet] = useState(0);
  const [rawDataFromDb, rawDataFromDbSet] = useState<any>([]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    scoresSet((oldArray) => [...oldArray, score]);
    scoreSet(0);
  };

  const sum = scores.reduce((a, b) => a + b, 0);
  const deleteScore = (i: number) => {
    scoresSet((prev) => prev.filter((el, index) => i !== index));
  };
  useEffect(() => {
    if (rawDataFromDb?.scores?.length > 0) scoresSet(rawDataFromDb.scores);
  }, [rawDataFromDb]);
  const updateDb = () => {
    db.collection(player)
      .get()
      .then((res) => {
        res.forEach((element) => {
          element.ref.delete();
        });
      })
      .then(() => {
        db.collection(player)
          .add({
            scores: scores,
          })
          .catch((error) => {
            console.error('Error adding document: ', error);
          });
      });
  };

  const getData = async () => {
    const events = await firebase.firestore().collection(player);
    events.get().then((querySnapshot) => {
      const tempDoc = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      rawDataFromDbSet(tempDoc[0]);
    });
  };
  useEffect(() => {
    if (scores.length) {
      updateDb();
    }
  }, [player, scores]);

  return (
    <Container>
      <SmallButton onClick={getData}>Pobierz</SmallButton>
      <Text>
        <b>
          {player}
          {scores.length % playersCount === index ? '*' : null}
        </b>
      </Text>
      <Scores>
        {scores.map((el, i) => {
          return (
            <FlexRow playersCount={playersCount}>
              <Score>{el}</Score>
              <SmallButton onClick={() => deleteScore(i)}>Usuń</SmallButton>
            </FlexRow>
          );
        })}
      </Scores>
      <Text>Suma: {sum}</Text>
      <SubmitContainer onSubmit={handleSubmit}>
        <Input
          type='number'
          onChange={(e) => scoreSet(Number(e.target.value))}
          value={score}
        />
        <SmallButton type='submit'>+</SmallButton>
      </SubmitContainer>
    </Container>
  );
};

export default PlayerScore;
const Input = styled.input`
  max-width: 38px;
  border: none;
  outline: none;
  box-shadow: rgb(55 71 79 / 20%) 0px 0px 2px, rgb(0 0 0 / 10%) 0px 8px 12px;
  font-size: 20px;
  padding: 2px;
  margin-right: 8px;
`;
const Scores = styled.ul`
  margin: 4px 0;
`;
const FlexRow = styled.div<{ playersCount: number }>`
  display: flex;
  align-items: center;
  margin: 4px 0;
  justify-content: center;
`;
const Score = styled.div`
  margin-right: 4px;
  font-size: 20px;
`;
const SmallButton = styled.button`
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
  padding: 4px;
  margin-bottom: 4px;
`;
const SubmitContainer = styled.form`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const Container = styled.section`
  margin: 0 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
