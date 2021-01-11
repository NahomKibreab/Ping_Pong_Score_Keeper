const firstScore = document.querySelector('#firstScore');
const secondScore = document.querySelector('#secondScore');
const playingTo = document.querySelectorAll('option');
const btn_1 = document.querySelector('#btn_1');
const btn_2 = document.querySelector('#btn_2');
const reset = document.querySelector('#reset');

btn_1.addEventListener('click', function () {
  firstScore.innerText = parseInt(firstScore.innerText) + 1;
});

btn_2.addEventListener('click', function () {
  secondScore.innerText = parseInt(secondScore.innerText) + 1;
});

reset.addEventListener('click', function () {
  firstScore.innerText = 0;
  secondScore.innerText = 0;
});

const checkPlayingTo = () => {
  for (let level of playingTo) {
    console.dir(level);
  }
};
