export function init() {
  const playList = [
    {
      title: 'Aqua Caelestis',
      src: 'assets/sounds/Aqua Caelestis.mp3',
      duration: '00:41',
    },
    {
      title: 'Ennio Morricone',
      src: 'assets/sounds/Ennio Morricone.mp3',
      duration: '01:20',
    },
    {
      title: 'River Flows In You',
      src: 'assets/sounds/River Flows In You.mp3',
      duration: '03:50',
    },
    {
      title: 'Summer Wind',
      src: 'assets/sounds/Summer Wind.mp3',
      duration: '01:20',
    },
  ];

  const playButton = document.querySelector('button.play');
  const previosButton = document.querySelector('button.play-prev');
  const nextButton = document.querySelector('button.play-next');
  const playlist = document.querySelector('.play-list');

  let isPlay = false;
  let playNum = 0;
  let isChar = false;
  const audio = new Audio();

  playList.forEach((el) => {
    const li = document.createElement('li'); //
    playlist.append(li);
    li.classList.add('play-item');
    li.textContent = el.title;
  });

  function playAudio() {
    audio.src = playList[playNum].src;
    playlist.children[playNum].classList.toggle('item-active');
    if (!isPlay) {
      if (isChar) {
        isChar = false;
        audio.currentTime = 0;
      } else {
        playButton.classList.add('pause');
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
      }
    } else {
      if (isChar) {
        isChar = false;
        audio.play();
      } else {
        playButton.classList.remove('pause');
        audio.pause();
        isPlay = false;
      }
    }
  }

  function playPrevius() {
    playlist.children[playNum].classList.toggle('item-active');
    playNum = playNum - 1;
    isChar = true;
    if (playNum < 0) {
      playNum = playList.length - 1;
    }
    playAudio();
  }

  function playNext() {
    playlist.children[playNum].classList.toggle('item-active');
    playNum = playNum + 1;
    isChar = true;
    if (playNum > playList.length - 1) {
      playNum = 0;
    }
    playAudio();
  }

  playButton.addEventListener('click', playAudio);
  previosButton.addEventListener('click', playPrevius);
  nextButton.addEventListener('click', playNext);
}
