import {STRINGS} from './strings.js'

function getTimesOfDay(){
    const hour = new Date().getHours();

    if ((hour >= 6) && (hour < 12)){
        return "morning";
    } else if ((hour >= 12) && (hour < 18)) {
        return "afternoon";
    } else if ((hour >= 18) && (hour <= 23)) {
        return "evening";
    } else {
        return "night";
    }
}

export function init(){
    document.addEventListener('changeLang', () => {
        showGreeting()
        updateUserName()
    });

    document.addEventListener('changeTimesOfDay', () => {
        showGreeting()
        updateUserName()
    });

    const name = document.querySelector('.name');
    name.addEventListener('input', saveUserName);

    showGreeting()
    updateUserName()
}


function showGreeting(){
    const lang = localStorage.getItem('lang')

    const timesOfDay = getTimesOfDay()
    let greeting = STRINGS.greetings[lang][timesOfDay]

    const greetingText = document.querySelector('.greeting');
    greetingText.textContent = greeting;
}




function saveUserName(evt){
    localStorage.setItem('name', evt.target.value )
}
function updateUserName() {
    const lang = localStorage.getItem('lang')

    const name = localStorage.getItem('name')
    const nameText = document.querySelector('.name')

    nameText.placeholder = STRINGS.greetingPlaceholder[lang]
    if (name) {
        nameText.value = name
    }
}




