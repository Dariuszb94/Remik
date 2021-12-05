import React, { FC, useRef, useState } from "react";
import range from "lodash/range";

type Props = {
  startSet: React.Dispatch<React.SetStateAction<boolean>>;
  playersSet: React.Dispatch<React.SetStateAction<string[]>>;
  players: string[];
};
const Setup: FC<Props> = ({ startSet, playersSet, players }) => {
  const [playersCount, playersCountSet] = useState(0);

  return (
    <>
      Ile graczy?
      <div>
        {playersCount > 0 ? (
          <button onClick={() => playersCountSet((prev) => prev - 1)}>-</button>
        ) : null}
        {playersCount}
        <button onClick={() => playersCountSet((prev) => prev + 1)}>+</button>
      </div>
      {range(playersCount).map((el, i) => {
        return (
          <input
            key={i}
            type="text"
            onChange={(e) =>
              playersSet((prevArr) => {
                return Object.assign([], prevArr, { [el]: e.target.value });
              })
            }
          />
        );
      })}
      <button onClick={() => startSet(true)}>Rozpocznij grę</button>
    </>
  );
};

export default Setup;
