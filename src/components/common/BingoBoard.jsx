import React from "react";
import { useSelector } from "react-redux";
import { createEmptyMatrix } from "../../utils/arrayFunc";
import BingoItem from "./BingoItem";
import FinishedList from "./FinishedList";

const BingoBoard = ({ player }) => {
  const size = useSelector((state) => state.bingo.size);
  const bingo = useSelector((state) => state.bingo[player].bingoArray);

  const bingoArray = bingo.length === 0 ? createEmptyMatrix(size) : bingo;

  return (
    <div>
      <div style={{ border: "solid", padding: 20, textAlign: "center" }}>
        {player} 빙고판
      </div>

      {bingoArray.map((column, i) => (
        <div style={{ display: "flex" }} key={i}>
          {column.map((bingoItem, j) => (
            <BingoItem item={bingoItem} player={player} key={j} />
          ))}
        </div>
      ))}

      <FinishedList player={player} />
    </div>
  );
};

export default BingoBoard;
