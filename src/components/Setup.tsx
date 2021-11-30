import React, { FC, useState } from "react";
import range from "lodash/range";
import _uniqueId from "lodash/uniqueId";

type Props = {
  startSet: React.Dispatch<React.SetStateAction<boolean>>;
  playersSet: React.Dispatch<React.SetStateAction<String[]>>;
};
const Setup: FC<Props> = ({ startSet, playersSet }) => {
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
      {range(playersCount).map((el) => {
        const id = _uniqueId("prefix-");

        return (
          <input
            key={id}
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
