// const date = new Date();
// const timeString = document.querySelector('.time');

// const currentTime = date.toLocaleTimeString();      

// timeString.textContent = currentTime

  

// const dateString = document.querySelector('.date');

// const options = {weekday: 'long', day: 'numeric', month: 'long',};
// const currentDate = date.toLocaleDateString('en-En', options);       

// dateString.textContent = currentDate



import * as Strings from './strings.js';
import * as Clock from './clock.js';
import * as Greeting from './greeting.js';

Strings.init;
Clock.init;
Greeting.init;