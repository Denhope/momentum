import * as Greeting from "./greeting.js";


function getRandomNum() {
    let num = Math.floor(20 * Math.random()) + 1;
    return num;
}

function setImage(){
    const timesOfDay = Greeting.getTimesOfDay();
    const bgNum = getRandomNum();
    const body = document.querySelector('.body');
    let imageUrl = `https://raw.githubusercontent.com/Denhope/stage1-tasks/assets/images/${timesOfDay}/${bgNum.toString().padStart(2,'0')}.jpg`;
    document.body.style.backgroundImage = `url(${imageUrl})`;    

}

const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');

let randomNum = getRandomNum();


function getSlideNext() {
    randomNum = randomNum + 1 <= 20 ? randomNum - 1 : 1;
    setImage()
}

function getSlidePrew() {
    randomNum = randomNum - 1 > 0 ? randomNum - 1 : 20;
    setImage()
}
// function getSlideNext() {
//     if (randomNum < 20) {
//       randomNum = randomNum + 1;
//     } else {
//       randomNum = 1;
//     }
//     setImage();  
// }

// function getSlidePrew() {
//     if (randomNum > 1) {
//   randomNum = randomNum - 1;
//     } else {
//       randomNum = 20;
//     }
//     console.log(randomNum);
//     setImage();
// }
function setListeners() {
    slideNext.addEventListener('click', () =>{
        getSlideNext();
      });
      slidePrev.addEventListener('click', () =>{
        getSlidePrew();
      });
}

export function init(){ 
   
    getSlidePrew()
    getSlideNext()
    setImage()
    setListeners()
}
