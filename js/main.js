const PLAYER1 = 'RED';
const PLAYER2 = 'BLUE';


let turn; // PLAYER 1 o PLAYER2
let gameBoard;  // array that holds > null (circle aval), BLUE/RED > p1/p2
let result;  //P1/P2, 'T' = TIE, null = G in P

const columnEls = document.querySelectorAll('.column');
const msgEl = document.querySelector('h3');
// const markerEls = [...document.querySelectorAll('#markers > div')];


document.querySelector('.gameBoard').addEventListener('click', handlePlayerTurn);
// document.getElementById('markers').addEventListener('click', handleDrop);
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
    const rowIdx = parseInt(evt.target.id);
    const colIdx = parseInt(evt.target.parentElement.id);
    // console.log(rowIdx, colIdx);
    if (turn === 1) return;
    // const colArr = gameBoard[colIdx];
    console.log(turn);
    gameBoard[colIdx][rowIdx] = turn;
    turn = (turn === PLAYER1) ? PLAYER2 : PLAYER1;}
    if (result) true;   
    render();



  function render() {
    columnEls.forEach(function(columnEl, colIdx) {
      Array.from(columnEl.children).forEach(function(rowEl, rowIdx) {
        rowEl.style.backgroundColor = gameBoard[colIdx][rowIdx];
        // document.getElementsByClassName(`column${colIdx}row${rowIdx}`);

      })
    });

   if (result) {msgEl.innerText = `${result} WINS!`;}
   else {
       msgEl.innerText = '';
   }
  };

  // function handleDrop(evt) {
  //   const colIdx = parseInt(evt.target.parentElement.id);
  //   if (colIdx === -1) return;
  //   const colArr = gameBoard[colIdx];
  //   const rowIdx = parseInt(evt.target.id);
  //   colArr[rowIdx] = turn;
  //   render();
  //   turn *= -1;
  // }

  function renderMarkers() {
    markerEls.forEach(function(markerEl, colIdx) {
      markerEl.style.visibility = board[colIdx].includes(0) ? 'visible' : 'hidden';
      console.log(renderMarkers);
    });
  }