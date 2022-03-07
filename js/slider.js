import * as Greeting from './greeting.js';
const body = document.querySelector('.body');
let randomNum;

function getRandomNum() {
  randomNum = Math.floor(20 * Math.random()) + 1;
}
getRandomNum();

function setImage() {
  const img = new Image();
  let timesOfDay = Greeting.getTimesOfDay();
  let bgNum = randomNum.toString().padStart(2, '0');
  img.src = `https://raw.githubusercontent.com/Denhope/stage1-tasks/assets/images/${timesOfDay}/${bgNum}.jpg`;
  img.onload = () => {
    document.body.style.backgroundImage = `url(${img.src})`;
  };
}

const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');

function getSlideNext() {
  if (randomNum === 20) {
    randomNum = 1;
  } else {
    randomNum++;
  }
  setImage();
}

function getSlidePrew() {
  if (randomNum === 1) {
    randomNum = 20;
  } else {
    randomNum--;
  }
  setImage();
}

function setListeners() {
  slideNext.addEventListener('click', () => {
    getSlideNext();
  });
  slidePrev.addEventListener('click', () => {
    getSlidePrew();
  });
}

export function init() {
  getSlidePrew();
  getSlideNext();
  setImage();
  setListeners();
  getRandomNum();
}
