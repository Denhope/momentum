import * as Greeting from "./greeting.js";

function setListeners() {
    const nextButton = document.querySelector('.slide-next');
    const prevButton = document.querySelector('.slide-prev');
   

    nextButton.addEventListener('click', getSlideNext());
    prevButton.addEventListener('click', getSlidePrew());
};

function getRandomNum() {
    let num = Math.floor(20 * Math.random()) + 1;
    return num;
}

console.log(getRandomNum())

function setImage(){
    const timesOfDay = Greeting.getTimesOfDay();
    const bgNum = getRandomNum();
    const body = document.querySelector('.body');
    let imageUrl = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timesOfDay}/${bgNum.toString().padStart(2,'0')}.jpg`;
    document.body.style.backgroundImage = `url(${imageUrl})`;
    

}




// function getSlidePrew() {
//     this.current = this.current - 1 > 0 ? this.current - 1 : 20;
//     this.updateImage()
// }

// function getSlideNext() {
//     this.current = this.current + 1 <= 20 ? this.current + 1 : 1
//     this.updateImage()
// }

export function init(){ 
   
    // getSlidePrew()
    // getSlideNext()
    // updateImage()
    setImage()
    // setListeners()
}


