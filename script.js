'use strict';

//geneate number
let generateNumber = function () {
  const min_value = 1;
  const max_value = 21;

  return Math.floor(Math.random() * (max_value - min_value) + min_value);
};
let random_num = generateNumber();

//asign the score and highscore
let score = 20;
let highscore = 0;

const displyMsg = function (msg) {
  document.querySelector('.message').textContent = msg;
};

//score board
let main_score_board = document.querySelector('.score');
//check btn
let btnCheck = document.querySelector('.check');
//high score board
let high_score = document.querySelector('.highscore');
//msg
const msg = document.querySelector('.message');
//input field

//addevenlisterner
btnCheck.addEventListener('click', () => {
  let text = Number(document.querySelector('.guess').value);
  if (!text) {
    displyMsg('VALUE IS EMPTY');
  } else if (text === random_num) {
    displyMsg('YOU WON');
    if (score > highscore) {
      highscore = score;
      high_score.textContent = highscore;
    }
    document.body.style.backgroundColor = 'green';
  } else if (text > random_num) {
    displyMsg('TOO HIGH!!!');
    score--;
    main_score_board.textContent = score;
  } else {
    displyMsg('TOO LOW!!!');
    score--;
    main_score_board.textContent = score;
  }

  if (score == 0) {
    document.body.style.backgroundColor = 'red';
    msg.textContent = 'YOU LOST!!!';
  }
});

let again_btn = document.querySelector('.again');
again_btn.addEventListener('click', () => {
  score = 20;
  random_num = generateNumber();
  document.body.style.backgroundColor = 'black';
  let text = (document.querySelector('.guess').value = '');
  let msg = (document.querySelector('.message').textContent =
    'Start Guessing!!!');
  main_score_board.textContent = score;
});
