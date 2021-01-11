const firstScore = document.querySelector('#firstScore');
const secondScore = document.querySelector('#secondScore');
const playingTo = document.querySelector('select');
let winningScore = parseInt(document.querySelector('option').value);
const btn_1 = document.querySelector('#btn_1');
const btn_2 = document.querySelector('#btn_2');
const playAgain = document.querySelector('#reset');

btn_1.addEventListener('click', function () {
  firstScore.innerText = parseInt(firstScore.innerText) + 1;
  gameOver();
});

btn_2.addEventListener('click', function () {
  secondScore.innerText = parseInt(secondScore.innerText) + 1;
  gameOver();
});

playAgain.addEventListener('click', reset);

function reset() {
  firstScore.innerText = 0;
  secondScore.innerText = 0;
  btn_1.disabled = false;
  btn_2.disabled = false;
  firstScore.style.color = null;
  secondScore.style.color = null;
}

playingTo.addEventListener('change', function (e) {
  reset();
  winningScore = parseInt(this.value);
});

function gameOver() {
  if (
    parseInt(firstScore.innerText) === winningScore ||
    parseInt(secondScore.innerText) === winningScore
  ) {
    if (parseInt(firstScore.innerText) === winningScore) {
      firstScore.style.color = 'green';
      secondScore.style.color = 'red';
      btn_1.disabled = true;
      btn_2.disabled = true;
    } else {
      firstScore.style.color = 'red';
      secondScore.style.color = 'green';
      btn_1.disabled = true;
      btn_2.disabled = true;
    }
  }
}
