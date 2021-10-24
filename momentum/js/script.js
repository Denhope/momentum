
// console.log(time.textContent);

function showTime() {    
    const date = new Date();
    const currentTime = date.toLocaleTimeString(); 
    setTimeout(showTime, 1000);   
    return currentTime;     
}


const time = document.querySelector('.time');
time.textContent = showTime();


const date = document.querySelector('.date');
date.textContent = showDate();

function showDate() {
    const date = new Date();
    const options = {weekday: 'long', day: 'numeric', month: 'long',};
    const currentDate = date.toLocaleDateString('en-En', options);
    
    setTimeout(showDate, 1000);
    return currentDate;
}



  
  

 



  