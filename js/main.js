const PLAYER1 = 'RED';
const PLAYER2 = 'BLUE';


let turn; // PLAYER 1 o PLAYER2
let gameBoard;  // array that holds > null (circle aval), BLUE/RED > p1/p2
let result;  //P1/P2, 'T' = TIE, null = G in P

const columnEls = document.querySelectorAll('.column');
const msgEl = document.querySelector('h3');


document.querySelector('.gameBoard').addEventListener('click', handlePlayerTurn);
resetBtn.addEventListener('click', init);


init();

function init() {
  gameBoard = [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null]
  ];
  turn = PLAYER1;
  result = null;


  render();
}

function handlePlayerTurn(evt) {
  if (result) return;
  if (!evt.target.classList.contains('circle')) return;
  const colIdx = parseInt(evt.target.parentElement.id);
  const colArr = gameBoard[colIdx];
  const rowIdx = colArr.indexOf(null);
  if (rowIdx === -1) return;
  // console.log(turn);
  gameBoard[colIdx][rowIdx] = turn;
  turn = (turn === PLAYER1) ? PLAYER2 : PLAYER1;
  getWinner(colIdx, rowIdx);
  render();
}


function checkVertWin(colIdx, rowIdx) {
  const player = gameBoard[colIdx][rowIdx];
  let count = 1; 
  let idx = rowIdx + 1; 
  while (idx < gameBoard.length && gameBoard[colIdx][idx] === player) {
    count++;
    idx++;
  }
  idx = rowIdx - 1; 
  while (idx >= 0 && gameBoard[colIdx][idx] === player) {
    count++;
    idx--;
  }
  return count >= 4 ? result = player : null;
}


function checkHorzWin(colIdx, rowIdx) {
  const player = gameBoard[colIdx][rowIdx];
  let count = 1; 
  let idx = colIdx + 1; 
  while (idx < gameBoard.length && gameBoard[idx][rowIdx] === player) {
    count++;
    idx++;
  }
  idx = colIdx - 1; 
  while (idx >= 0 && gameBoard[idx][rowIdx] === player) {
    count++;
    idx--;
  }
  return count >= 4 ? result = player : null;
}




function checkDiagRight(colIdx, rowIdx) {
  const player = gameBoard[colIdx][rowIdx];
  let count = 1; 
  //count right
  let idx1 = colIdx - 1; 
  let idx2 = rowIdx + 1;
  while (idx1 >= 0  && idx2 < gameBoard[0].length && gameBoard[idx1][idx2] === player) {
    count++;
    idx1--;
    idx2++;
  }
  idx1 = colIdx + 1; 
  idx2 = rowIdx - 1
  while (idx1 < gameBoard.length && idx2 >= 0 && gameBoard[idx1][idx2] === player) {
    count++;
    idx1++;
    idx2--;
  }
  return count >= 4 ? result = player : null; 
}

function checkDiagLeft(colIdx, rowIdx) {
  const player = gameBoard[colIdx][rowIdx];
  let count = 1; 
  //count right
  let idx1 = colIdx - 1; 
  let idx2 = rowIdx + 1;
  while (idx1 >= 0  && idx2 < gameBoard[0].length && gameBoard[idx1][idx2] === player) {
    count++;
    idx1--;
    idx2++;
  }
  idx1 = colIdx + 1; 
  idx2 = rowIdx - 1
  while (idx1 < gameBoard.length && idx2 >= 0 && gameBoard[idx1][idx2] === player) {
    count++;
    idx1++;
    idx2--;
  }
  return count >= 4 ? result = player : null; 
}



function checkDiagLeft(colIdx, rowIdx) {
  const player = board[colIdx][rowIdx];
  let count = 1; 
  //count right
  let idx1 = colIdx - 1; 
  let idx2 = rowIdx + 1;
  while (idx1 >= 0  && idx2 < board[0].length && board[idx1][idx2] === player) {
    count++;
    idx1--;
    idx2++;
  }

  idx1 = colIdx + 1; 
  idx2 = rowIdx - 1
  while (idx1 < board.length && idx2 >= 0 && board[idx1][idx2] === player) {
    count++;
    idx1++;
    idx2--;
  }
  return count === 4 ? result = player : null; 
}



function getWinner(colIdx, rowIdx) {
  return checkVertWin(colIdx, rowIdx)
    || checkHorzWin(colIdx, rowIdx)
    || checkDiagRight(colIdx, rowIdx)
}



function render() {
  columnEls.forEach(function (columnEl, colIdx) {
    Array.from(columnEl.children).forEach(function (rowEl, rowIdx) {
      rowEl.style.backgroundColor = gameBoard[colIdx][5 - rowIdx];
      
    })
  });
  
  if (result) { msgEl.innerText = `${result} WINS!`; }
  else {
    msgEl.innerText = '';
  }
}
