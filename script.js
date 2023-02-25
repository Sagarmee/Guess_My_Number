'use strict';

let generateNumber = function () {
  const min_value = 1;
  const max_value = 21;

  return Math.floor(Math.random() * (max_value - min_value) + min_value);
};
let random_num = generateNumber();
let score = 5;

let main_score_board = document.querySelector('.score');

let btnCheck = document.querySelector('.check');
btnCheck.addEventListener('click', () => {
  const msg = document.querySelector('.message');
  let text = Number(document.querySelector('.guess').value);

  if (!text) {
    msg.textContent = 'VALUE IS EMPTY';
  }

  if (text === random_num) {
    msg.textContent = 'YOU WON';
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
  score = 5;
  random_num = generateNumber();
  document.body.style.backgroundColor = 'black';
  let text = (document.querySelector('.guess').value = '');
  let msg = (document.querySelector('.message').textContent =
    'Start Guessing!!!');
  main_score_board.textContent = score;
});
