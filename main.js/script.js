const PLAYER1 = 'RED';
const PLAYER2 = 'BLUE';


let turn; // PLAYER 1 o PLAYER2
let gameBoard;  // array that holds > null (circle aval), BLUE/RED > p1/p2
let result;  //P1/P2, 'T' = TIE, null = G in P

const circleEls = document.querySelectorAll('.circle');
const msgEl = document.querySelector('h3');


document.querySelector('.gameBoard').addEventListener('click', handlePlayerTurn);
resetBtn.addEventListener('click', init);


init();

function init() {
  gameBoard = [
      null, null, null, null, null, null, 
      null, null, null, null, null, null, 
      null, null, null, null, null, null, 
      null, null, null, null, null, null, 
      null, null, null, null, null, null, 
      null, null, null, null, null, null,
];
  turn = PLAYER1;
  result = null;

  render();
}

function handlePlayerTurn(evt) {
    const idx = parseInt(evt.target.id)
    if (gameBoard[idx] || result) {
         return;
} else{
    gameBoard[idx] = turn;
    winner(idx, 1);
    winner(idx, 4);
    winner(idx, 5);
    winner(idx, 6);
    winner(idx, 7);
    turn = (turn === PLAYER1) ? PLAYER2 : PLAYER1;}

    render();
}
  
function winner(idx, inc) {
    let checkIdx = idx;
    let theRow = 0;
    while (gameBoard[checkIdx] === turn && checkIdx < gameBoard.length) {
        theRow++; 
        checkIdx = checkIdx + inc;
    }

    checkIdx = idx - inc;

    while (gameBoard[checkIdx] === turn && checkIdx >= 0) {
        theRow++; 
        checkIdx = checkIdx - inc;
    

    }
    if (theRow >= 4) {
        result = turn;
    }
};



  function render() {
    circleEls.forEach(function(circleEl, idx) {
      circleEl.style.backgroundColor = gameBoard[idx];
    });

   if (result) {msgEl.innerText = `${result} WINS!`;}
   else {
       msgEl.innerText = '';
   }
  };
