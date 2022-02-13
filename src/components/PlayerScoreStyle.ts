import styled from 'styled-components';

export const Input = styled.input`
  max-width: 38px;
  border: none;
  outline: none;
  box-shadow: rgb(55 71 79 / 20%) 0px 0px 2px, rgb(0 0 0 / 10%) 0px 8px 12px;
  font-size: 20px;
  margin-right: 8px;
  border-radius: 4px;
  text-align: center;
  padding: 7px 2px;
`;
export const Scores = styled.ul`
  margin: 4px 0;
  max-height: 72vh;
  overflow: scroll;
  padding: 0;
`;
export const Sum = styled.div`
  font-size: 28px;
  margin: 0 1px;
  white-space: pre;
  text-align: center;
  letter-spacing: -1px;
`;
export const FlexRow = styled.div<{ playersCount: number }>`
  display: flex;
  align-items: center;
  margin: 4px 0;
  justify-content: center;
  padding-right: 9px;
  &:nth-child(${(props) => props.playersCount}n+1) {
    background: rgba(0, 0, 0, 0.05);
  }
  border-radius: 4px;
`;
export const Score = styled.div`
  margin-right: 4px;
  font-size: 20px;
`;
export const SmallButton = styled.button`
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 1.3;
  text-align: center;
  cursor: pointer;
  color: rgb(74, 74, 74);
  font-weight: 400;
  box-shadow: rgb(55 71 79 / 20%) 0px 0px 2px, rgb(0 0 0 / 10%) 0px 8px 12px;
  max-width: 200px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  padding: 8px 4px;
  display: flex;
`;

export const MediumButton = styled.button`
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 1.3;
  text-align: center;
  cursor: pointer;
  color: rgb(74, 74, 74);
  font-weight: 400;
  box-shadow: rgb(55 71 79 / 20%) 0px 0px 2px, rgb(0 0 0 / 10%) 0px 8px 12px;
  max-width: 200px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  padding: 8px;
  margin-top: 20px;
`;
export const SubmitContainer = styled.form`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const Container = styled.section`
  margin: 0 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
