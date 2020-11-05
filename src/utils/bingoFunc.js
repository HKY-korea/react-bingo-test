import { arrayToMatrix, shuffleArray, matrixDoubleCheck } from './arrayFunc';

export const initBingoArray = (size) => {
  const bingoArray = [];

  for (let i = 0; i < size * size; i++) {
    bingoArray[i] = {
      number: i + 1,
      clicked: false
    }
  }

  return arrayToMatrix(shuffleArray(bingoArray));
}

export const clickItem = (player1Array, player2Array, number) => {
  let isClicked = false;
  let rowIndex;

  for (let colIndex = 0; colIndex < player1Array.length; colIndex++) {
    rowIndex = player1Array[colIndex].findIndex(item => item.number === number);

    if (rowIndex !== -1) {
      if (player1Array[colIndex][rowIndex].clicked === true)
        return isClicked = true;

      player1Array[colIndex][rowIndex].clicked = true;
      break;
    }
  }

  for (let colIndex = 0; colIndex < player2Array.length; colIndex++) {
    rowIndex = player2Array[colIndex].findIndex(item => item.number === number);

    if (rowIndex !== -1) {
      player2Array[colIndex][rowIndex].clicked = true;
      break;
    }
  }

  return isClicked;
}

export const checkBingo = (bingoArray, completedArray, size) => {
  let isBingo, isEqual;

  // Check Horizontal Bingo
  for (let i = 0; i < size; i++) {
    isBingo = true;

    for (let j = 0; j < size; j++) 
      isBingo = isBingo && bingoArray[i][j].clicked;

    if (isBingo) {
      isEqual = matrixDoubleCheck(completedArray, bingoArray[i])

      if (!isEqual) completedArray.push(bingoArray[i])
    }
  }

  // Check Vertical Bingo
  for (let i = 0; i < size; i++) {
    isBingo = true;

    for (let j = 0; j < size; j++) 
      isBingo = isBingo && bingoArray[j][i].clicked;

    if (isBingo) {
      const verticalBingo = [];

      for (let k = 0; k < size; k++)
        verticalBingo.push(bingoArray[k][i]);

      isEqual = matrixDoubleCheck(completedArray, verticalBingo);

      if (!isEqual) completedArray.push(verticalBingo);
    }
  }

  // Check Diagonal Bingo
  // Left Diagonal
  isBingo = true;

  for (let i = 0; i < size; i++) {
    isBingo = isBingo && bingoArray[i][i].clicked;
  }

  if (isBingo) {
    const diagonalBingo = [];
  
    for (let j = 0; j < size; j++)
      diagonalBingo.push(bingoArray[j][j]);

    isEqual = matrixDoubleCheck(completedArray, diagonalBingo);

    if (!isEqual) completedArray.push(diagonalBingo);
  }

  // Right Diagonal
  isBingo = true;
  
  for (let i = 0; i < size; i++) {
    isBingo = isBingo && bingoArray[i][size - i - 1].clicked;
  }

  if (isBingo) {
    const diagonalBingo = [];

    for (let j = 0; j < size; j++) {
      diagonalBingo.push(bingoArray[j][size - j - 1]);
    }

    isEqual = matrixDoubleCheck(completedArray, diagonalBingo);

    if (!isEqual) completedArray.push(diagonalBingo);
  }
}