import React from "react";
import { useSelector } from "react-redux";
import FinishedLine from "./FinishedLine";

const FinishedList = ({ player }) => {
  const completedArray = useSelector(
    (state) => state.bingo[player].completedArray
  );

  return (
    <div>
      <div style={{ border: "solid", padding: 20, textAlign: "center" }}>
        {player} 완성 빙고
      </div>

      {completedArray.map((completedLine, i) => (
        <FinishedLine completedLine={completedLine} key={i} />
      ))}
    </div>
  );
};

export default FinishedList;
