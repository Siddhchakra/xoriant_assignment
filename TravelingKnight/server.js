/**
 * This function initialize the board and set the value as FALSE
 * @param {*} size: number
 * @returns
 */
function initChessBoard(size) {
  return [...Array(size)].map((v) => [...Array(size).map((v) => false)]);
}

function checkEntireBoardVisited(board) {
  return board.every((col) => col.every((sq) => sq));
}

/**
 * This function calculates all the possible moves and return the array
 * @param {*} x
 * @param {*} y
 * @param {*} board
 * @param {*} boardSize
 */
function possibleMoves(x, y, board, boardSize) {
  const moves = [];

  //below are the x & y coordinates for 1 horizontal + 2 vertical and 2 horizontal + 1 vertical
  const possibles = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ];

  //this checks whether the move is not outside of the board size
  for (const [offsetX, offsetY] of possibles) {
    const nextX = x + offsetX;
    const nextY = y + offsetY;

    if (
      nextX < boardSize &&
      nextX >= 0 &&
      nextY < boardSize &&
      nextY >= 0 &&
      !board[nextX][nextY]
    ) {
      moves.push([nextX, nextY]);
    }
  }

  return moves;
}

/**
 * This function provides the next position of Knight
 * @param {*} x: number
 * @param {*} y: number
 * @param {*} board: array[n*n]
 * @param {*} boardSize: number
 */
function nextPosition(x, y, board, boardSize) {
  //mark the current position as visited
  const updatedBoard = [...board];
  updatedBoard[x][y] = true;

  //get all the possible moves
  let moves = possibleMoves(x, y, updatedBoard, boardSize);

  if (moves.length === 0) {
    //check whether Knight covered all the cells
    return checkEntireBoardVisited(updatedBoard) ? [[x, y]] : false;
  }
}

/**
 * This function is the entry point or to start the travel
 * @param {*} x: number
 * @param {*} y: number
 * @param {*} chessBoardSize: number
 */
function startKnightTravel(x, y, chessBoardSize) {
  //initialize the board by given size
  const board = initChessBoard(chessBoardSize);

  //proceed to the next position
  nextPosition(x, y, board, chessBoardSize);
}
