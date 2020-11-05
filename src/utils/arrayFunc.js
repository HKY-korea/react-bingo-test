export const shuffleArray = (array) => {
  let tempIndex;

  for (let i = 0; i < array.length ; i++) {
    tempIndex = Math.floor(Math.random() * i);

    [array[i], array[tempIndex]] = [array[tempIndex], array[i]];
  }

  return array;
}

export const arrayToMatrix = (array) => {
  const matrix = [];
  let colIndex = 0;
  let row = Math.pow(array.length, 0.5);

  for (let i = 0; i < row; i++) {
    matrix.push(array.slice(colIndex, row * (i + 1)))
    colIndex += row;
  }

  return matrix;
}

export const createEmptyMatrix = (size) => {
  let matrix = [];

  for (let i = 0; i < size; i++) matrix[i] = new Array(size).fill(0);

  return matrix;
}

export const isArrayEqual = (array1, array2) => {
  if (JSON.stringify(array1) === JSON.stringify(array2))
    return true;
  return false;
}

export const matrixDoubleCheck = (matrix, array) => {
  let isEqual = false;

  if (matrix.length === 0) 
    return isEqual;
  else {
    for (let i = 0; i < matrix.length; i++) {
      isEqual = isArrayEqual(matrix[i], array)

      if (isEqual) break;
    }
  }

  return isEqual;
}