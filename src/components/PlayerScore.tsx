import React, { FC, useEffect, useState } from 'react';
import { Text } from './Setup';
import db from '../firebase';
import firebase from 'firebase';
import { v4 as uuidv4 } from 'uuid';
import {
  Container,
  FlexRow,
  MediumButton,
  Score,
  Scores,
  SmallButton,
  SubmitContainer,
  Sum,
  Input,
} from './PlayerScoreStyle';

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
  }, [player, scores, updateDb]);
  useEffect(() => {
    if (sum >= 1000) {
      db.collection('rundy')
        .add({
          liczbaRund: scores.length,
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    }
  }, [scores, sum]);
  return (
    <Container>
      <Text>
        <b>
          {player}
          {scores.length % playersCount === index ? '*' : null}
        </b>
      </Text>
      <Scores>
        {scores.map((el, i) => {
          return (
            <FlexRow playersCount={playersCount} key={uuidv4()}>
              <Score>{el}</Score>
              <SmallButton onClick={() => deleteScore(i)}>
                <svg
                  width='13'
                  height='16'
                  viewBox='0 0 13 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8.0076e-10 4.5V3.40625C0.0193452 3.01042 0.164435 2.67708 0.435268 2.40625C0.706101 2.13542 1.0253 2 1.39286 2H2.78571V1.5C2.78571 1.08333 2.92113 0.729167 3.19196 0.4375C3.4628 0.145833 3.79167 0 4.17857 0H8.82143C9.20833 0 9.5372 0.145833 9.80804 0.4375C10.0789 0.729167 10.2143 1.08333 10.2143 1.5V2H11.6071C11.9747 2 12.2939 2.13542 12.5647 2.40625C12.8356 2.67708 12.9807 3.01042 13 3.40625V4.5C13 4.77083 12.9081 5.00521 12.7243 5.20313C12.5406 5.40106 12.3229 5.50001 12.0714 5.5V14C12.0714 14.5625 11.8925 15.0365 11.5346 15.4219C11.1767 15.8073 10.7366 16 10.2143 16H2.78571C2.26339 16 1.82329 15.8073 1.46539 15.4219C1.1075 15.0365 0.928562 14.5625 0.928571 14V5.5C0.677083 5.5 0.459447 5.40105 0.275662 5.20313C0.0918775 5.00522 -9.9046e-06 4.77084 8.0076e-10 4.5H8.0076e-10ZM0.928571 4.5H12.0714V3.5C12.0714 3.35417 12.0279 3.23437 11.9408 3.14062C11.8538 3.04686 11.7425 2.99998 11.6071 2.99998H1.39284C1.25743 2.99998 1.14619 3.04686 1.05913 3.14062C0.972071 3.23437 0.928542 3.35417 0.928542 3.5V4.5H0.928571ZM1.85714 14C1.85714 14.2708 1.94903 14.5052 2.13281 14.7031C2.31658 14.9011 2.53422 15 2.78571 15H10.2143C10.4658 15 10.6834 14.901 10.8672 14.7031C11.051 14.5052 11.1429 14.2708 11.1429 14V5.5H1.85714V14V14ZM2.78571 13.5V7C2.78571 6.85417 2.82924 6.73437 2.9163 6.64062C3.00336 6.54686 3.1146 6.49998 3.25001 6.49998H4.17859C4.314 6.49998 4.42524 6.54686 4.5123 6.64062C4.59936 6.73437 4.64289 6.85417 4.64289 7V13.5C4.64289 13.6458 4.59936 13.7656 4.5123 13.8594C4.42524 13.9531 4.314 14 4.17859 14H3.25001C3.1146 14 3.00336 13.9531 2.9163 13.8594C2.82924 13.7656 2.78571 13.6458 2.78571 13.5ZM3.25 13.5H4.17857V7H3.25V13.5V13.5ZM3.71429 2H9.28571V1.5C9.28571 1.35417 9.24219 1.23437 9.15513 1.14062C9.06807 1.04686 8.95683 0.999984 8.82141 0.999984H4.17856C4.04314 0.999984 3.9319 1.04686 3.84484 1.14062C3.75779 1.23437 3.71426 1.35417 3.71426 1.5V2H3.71429ZM5.57143 13.5V7C5.57143 6.85417 5.61496 6.73437 5.70202 6.64062C5.78908 6.54686 5.90031 6.49998 6.03573 6.49998H6.9643C7.09972 6.49998 7.21095 6.54686 7.29801 6.64062C7.38507 6.73437 7.4286 6.85417 7.4286 7V13.5C7.4286 13.6458 7.38507 13.7656 7.29801 13.8594C7.21095 13.9531 7.09972 14 6.9643 14H6.03573C5.90031 14 5.78908 13.9531 5.70202 13.8594C5.61496 13.7656 5.57143 13.6458 5.57143 13.5ZM6.03571 13.5H6.96429V7H6.03571V13.5ZM8.35714 13.5V7C8.35714 6.85417 8.40067 6.73437 8.48773 6.64062C8.57479 6.54686 8.68603 6.49998 8.82144 6.49998H9.75001C9.88543 6.49998 9.99667 6.54686 10.0837 6.64062C10.1708 6.73437 10.2143 6.85417 10.2143 7V13.5C10.2143 13.6458 10.1708 13.7656 10.0837 13.8594C9.99667 13.9531 9.88543 14 9.75001 14H8.82144C8.68603 14 8.57479 13.9531 8.48773 13.8594C8.40067 13.7656 8.35714 13.6458 8.35714 13.5ZM8.82143 13.5H9.75V7H8.82143V13.5Z'
                    fill='black'
                  />
                </svg>
              </SmallButton>
            </FlexRow>
          );
        })}
      </Scores>
      <Sum>
        <b>Σ:{sum}</b>
      </Sum>
      <SubmitContainer onSubmit={handleSubmit}>
        <Input
          type='number'
          onChange={(e) => scoreSet(Number(e.target.value))}
          value={score}
        />
        <SmallButton type='submit'>+</SmallButton>
      </SubmitContainer>
      <MediumButton onClick={getData}>Pobierz</MediumButton>
      <MediumButton>Wyślij</MediumButton>
    </Container>
  );
};

export default PlayerScore;
