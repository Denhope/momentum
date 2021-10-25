export function init(){
    setInterval(() => {
        showTime();
        showDate();
    }, 1000);
}

function showTime() {
    const date = new Date();
    const timeString = document.querySelector('.time');
    
    const currentTime = date.toLocaleTimeString();      
    
    timeString.textContent = currentTime
}
   
function showDate(){
    const date = new Date();
    const dateString = document.querySelector('.date');
    const lang = localStorage.getItem('lang');

    const options = {weekday: 'long', day: 'numeric', month: 'long',};
    
    const currentDate = date.toLocaleDateString('en-US', options);       
    
    dateString.textContent = currentDate
}
      


