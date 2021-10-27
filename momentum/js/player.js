
import playList from "./playList.js";

export function init() {
    

    
    const playListContainer = document.querySelector('.play-list');



    playList.forEach(el => {
        const li = document.createElement('li');// здесь ваш код
        playListContainer.append(li);
        li.classList.add('play-item');
        li.textContent = el.title;   
    })
}


