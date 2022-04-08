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


// function checkVert(colIdx, rowIdx) {
//   //vertical
//   const player = gameBoard[colIdx][rowIdx];
//   let count = 0;
//   let idx = rowIdx + 1;
//   while (idx < gameBoard[rowIdx].length && gameBoard[rowIdx][idx] === player) {
//     count++;
//     idx++;
    
    
//     idx = rowIdx - 1;
//     while (idx >= null && gameBoard[rowIdx][idx] === player) {
//       count++;
//       idx--;
//     }
//     return count === 4 ? player : null;
//   }
// }

// function checkHorizon(colIdx, rowIdx) {
//   const player = board[colIdx][rowIdx];
//   let count = 1;
//   //count right
//   let idx = colIdx + 1;
//   while (idx < board.length && board[idx][rowIdx] === player) {
//     count++;
//     idx++;
    
//     //count left
//     idx = colIdx - 1;
//     while (idx >= 0 && board[idx][rowIdx] === player) {
//       count++;
//       idx--;
//     }
//     return count >= 4 ? player : null;
//   }
// }




function checkVertWin(colIdx, rowIdx) {
  const player = gameBoard[colIdx][rowIdx];
  let count = 1; 
  //count right
  let idx = rowIdx + 1; 
  while (idx < gameBoard[idx].length && gameBoard[colIdx][idx] === player) {
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

//opposite
function checkHorzWin(colIdx, rowIdx) {
  const player = gameBoard[colIdx][rowIdx];
  let count = 1; 
  //count right
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
function getWinner(colIdx, rowIdx) {
  return checkVertWin(colIdx, rowIdx)
    || checkHorzWin(colIdx, rowIdx);
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
