import { createSlice } from "@reduxjs/toolkit";
import { initBingoArray, clickItem, checkBingo } from '../utils/bingoFunc';

const winningBingoCount = 5;

const slice = createSlice({
  name: "bingo",
  initialState: {
    isStart: false,
    size: 5,
    winner: "",
    player1: {
      bingoArray: [],
      completedArray: [],
      turn: true
    },
    player2: {
      bingoArray: [],
      completedArray: [],
      turn: false
    }
  },
  reducers: {
    START_BINGO: (bingo) => {
      bingo.isStart = true;
      bingo.player1.bingoArray = initBingoArray(bingo.size);
      bingo.player2.bingoArray = initBingoArray(bingo.size);
    },
    RESTART_BINGO: (bingo) => {
      bingo.player1.bingoArray = initBingoArray(bingo.size);
      bingo.player1.turn = true;
      bingo.player1.completedArray = [];

      bingo.player2.bingoArray = initBingoArray(bingo.size);
      bingo.player2.turn = false;
      bingo.player2.completedArray = [];
    },
    CLICK_ITEM: (bingo, action) => {
      if (!bingo.isStart) return;

      if (bingo[action.payload.player].turn) {
        const isClicked = clickItem(bingo.player1.bingoArray, bingo.player2.bingoArray, action.payload.number)

        if (isClicked) return;

        checkBingo(bingo.player1.bingoArray, bingo.player1.completedArray, bingo.size);
        checkBingo(bingo.player2.bingoArray, bingo.player2.completedArray, bingo.size);

        if (bingo.player1.completedArray.length >= winningBingoCount && bingo.player2.completedArray.length >= winningBingoCount)
          bingo.winner = "draw";
        else if (bingo.player1.completedArray.length >= winningBingoCount)
          bingo.winner = "player1";
        else if (bingo.player2.completedArray.length >= winningBingoCount)
          bingo.winner = "player2";

        [bingo.player1.turn, bingo.player2.turn] = [bingo.player2.turn, bingo.player1.turn];
        return;
      }

      alert("잘못된 차례입니다.");
    },
    RESET_BINGO: (bingo) => {
      bingo.isStart = false;

      bingo.player1.bingoArray = [];
      bingo.player1.completedArray = [];
      bingo.player1.turn = true;

      bingo.player2.bingoArray = [];
      bingo.player2.completedArray = [];
      bingo.player2.turn = false;

      bingo.winner = ""
    }
  }
});

export const { START_BINGO, RESTART_BINGO, CLICK_ITEM, RESET_BINGO } = slice.actions;
export default slice.reducer;