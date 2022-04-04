/*----- constants -----*/

const PLAYER1 = 'red';
const PLAYER2 = 'blue';
const winningCombinations = [
    //horizontal
    [30, 31, 32, 33],
    [31, 32, 33, 34],
    [32, 33, 34, 35],
    [24, 25, 26, 27],
    [25, 26, 27, 28],
    [26, 27, 28, 29],
    [18, 19, 20, 21],
    [19, 20, 21, 22],
    [20, 21, 22, 23],
    [12, 13, 14, 15],
    [13, 14, 15, 16],
    [14, 15, 16, 17],
    [6, 7, 8, 9],
    [7, 8, 9, 10],
    [8, 9, 10, 11],
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],

   //vertical
   [18, 12, 6, 0],
   [19, 13, 7, 1],
   [20, 14, 8, 2],
   [21, 15, 9, 3],
   [22, 16, 10, 4],
   [23, 17, 11, 5],
   [24, 18, 12, 6],
   [25, 19, 13, 7],
   [26, 20, 14, 8],
   [27, 21, 15, 9],
   [28, 22, 16, 10],
   [29, 23, 17, 11],
   [30, 24, 18, 12],
   [31, 25, 19, 13],
   [32, 26, 20, 14],
   [33, 27, 21, 15],
   [34, 28, 22, 16],
   [35, 29, 23, 17],
   //diagonal
   [30, 25, 20, 15],
   [31, 26, 21, 16],
   [32, 27, 22, 17],
   [33, 26, 19, 12],
   [34, 27, 20, 13],
   [35, 28, 21, 14],
   [18, 13, 8, 3],
   [19, 14, 9, 4],
   [20, 15, 10, 5],
   [21, 14, 7, 0],
   [22, 15, 8, 1],
   [23, 16, 9, 2],
   [24, 19, 14, 9],
   [25, 20, 15, 10],
   [26, 21, 16, 11],
   [27, 20, 13, 6],
   [28, 21, 14, 7],
   [29, 22, 15, 8]

]

/*----- app's state (variables) -----*/



let turn; // PLAYER 1 o PLAYER2
let gameBoard;  // array that holds > null (circle aval), BLUE/RED > p1/p2
let winner;  //P1/P2, 'T' = TIE, null = G in P

/*----- cached element references -----*/

const circleEls = document.querySelectorAll('.circle');

// const msgEl = document.querySelector('h1');
// const resetBtn = document.getElementById('reset-btn');

//event listeners
document.querySelector('.gameBoard').addEventListener('click', handlePlayerTurn);
resetBtn.addEventListener('click', init);




//functions
init();

// init responibility initializing state variables > render
function init() {
  gameBoard = [null, null, null, null, null, null, null, null, null,
                null, null, null, null, null, null, null, null, null, 
                null, null, null, null, null, null, null, null, null,
                null, null, null, null, null, null, null, null];
  turn = PLAYER1;
  winner = null;

  render();
}

function handlePlayerTurn(evt) {
    const idx = parseInt(evt.target.id)
    if (gameBoard[idx] || winner) {
         return;
} else{
    gameBoard[idx] = turn;
    turn = (turn === PLAYER1) ? PLAYER2 : PLAYER1;}
    render();
}
  

  
  function render() {
    circleEls.forEach(function(circleEl, idx) {
      circleEl.style.backgroundColor = gameBoard[idx];
    });
  }

