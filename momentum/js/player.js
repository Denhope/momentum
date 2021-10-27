
// import playList from "./playList.js";

export function init() {


    const playList = [
        {      
          title: 'Aqua Caelestis',
          // src: '../assets/sounds/Aqua Caelestis.mp3',
          // duration: '00:41'
        },  
        {      
          title: 'River Flows In You',
          // src: '../assets/sounds/River Flows In You.mp3',
          // duration: '03:50'
        },
        {
          title: 'Summer Wind',
          // src: 'assets/sounds/Summer Wind.mp3',
          // duration: '01:20'
        },
        {
          title: 'Ennio Morricone',
          // src: 'assets/sounds/Ennio Morricone.mp3',
          // duration: '01:20'
        }
    ]
    //   export default playList;
    

    
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




