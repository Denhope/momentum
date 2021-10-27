
import playList from "./playList.js";

export function init() {
    

    
    const playListContainer = document.querySelector('.play-list');



    playList.forEach(el => {
        const li = document.createElement('li');// здесь ваш код
        playListContainer.append(li);
        li.classList.add('play-item');
        li.textContent = el.title;   
    })



    const playBtn = document.querySelector('.play');
    const prevBtn= document.querySelector('.play-prev');
    const nextBtn = document.querySelector('play-next');

    const audio = document.querySelector('audio');

    
    function playAudio() {
        audio.currentTime = 0;
        audio.play();
    }
    function pauseAudio() {
        audio.pause();
    }

}




