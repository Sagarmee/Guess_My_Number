'use strict';

let generateNumber = function () {
  const min_value = 1;
  const max_value = 21;

  return Math.floor(Math.random() * (max_value - min_value) + min_value);
};
let random_num = generateNumber();
let score = 20;
let highscore = 0;

let main_score_board = document.querySelector('.score');
let btnCheck = document.querySelector('.check');
let high_score = document.querySelector('.highscore');

btnCheck.addEventListener('click', () => {
  const msg = document.querySelector('.message');
  let text = Number(document.querySelector('.guess').value);

  if (!text) {
    msg.textContent = 'VALUE IS EMPTY';
  }

  if (text === random_num) {
    msg.textContent = 'YOU WON';
    if (score > highscore) {
      high_score.textContent = score;
    }
    document.body.style.backgroundColor = 'green';
  } else if (text > random_num) {
    msg.textContent = 'TOO HIGH!!!';
    score--;
    main_score_board.textContent = score;
  } else {
    msg.textContent = 'TOO LOW!!!';
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
