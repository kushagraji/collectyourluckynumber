'use strict';
const score1El = document.querySelector('#score--0');
const score2El = document.querySelector('#score--1');
const image = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

score1El.textContent = 0;
score2El.textContent = 0;
image.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.floor(Math.random() * 6) + 1);
    console.log(dice);
    image.classList.remove('hidden');
    image.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      console.log(currentScore);
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
      // player0.textContent = currentScore;
      //add value to current score
    } else {
      switchPlayer();
      //switch to another user
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 20) {
      playing = false;
      image.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      //Current player wins
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  score1El.textContent = 0;
  score2El.textContent = 0;
  image.classList.add('hidden');
  current0.textContent = 0;
  current1.textContent = 0;
  player1.classList.remove('player--winner');
  player0.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  playing = true;
  score[0] = 0;
  score[1] = 0;
});
