import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GameButton from "./common/GameButton";
import BingoBoard from "./common/BingoBoard";
import { RESET_BINGO } from "../store/bingo";

const Bingo = () => {
  const dispatch = useDispatch();
  const winner = useSelector((state) => state.bingo.winner);

  useEffect(() => {
    if (winner === "") return;

    if (winner === "player1") alert("Player 1이 빙고를 완성했습니다.");
    else if (winner === "player2") alert("Player 2가 빙고를 완성했습니다.");
    else if (winner === "draw") alert("무승부입니다.");

    dispatch(RESET_BINGO());
  }, [winner, dispatch]);

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: 30 }}>
      <GameButton />

      <div
        style={{
          marginTop: 20,
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <BingoBoard player="player1" />

        <BingoBoard player="player2" />
      </div>
    </div>
  );
};

export default Bingo;
