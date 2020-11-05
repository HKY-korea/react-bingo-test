import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { START_BINGO, RESTART_BINGO } from "../../store/bingo";

const GameButton = () => {
  const dispatch = useDispatch();
  const isStart = useSelector((state) => state.bingo.isStart);

  return !isStart ? (
    <button onClick={() => dispatch(START_BINGO())}>게임 시작</button>
  ) : (
    <button onClick={() => dispatch(RESTART_BINGO())}>게임 재시작</button>
  );
};

export default GameButton;
