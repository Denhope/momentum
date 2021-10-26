const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const error = document.querySelector('.weather-error');
const city = document.querySelector('.city');



async function getWeather() {
    // try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=en&appid=bf5425e3d31eabbedb3c44fafb1cad2e&units=metric`;
        // const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=bf5425e3d31eabbedb3c44fafb1cad2e&units=metric`;
        const res = await fetch(url);
        const data = await res.json(); 
      

        error.textContent = '';
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${data.main.temptoFixed(0)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = `Wind speed: ${data.wind.speed.toFixed(0)} m/s`;
        humidity.textContent = `Humidity: ${data.main.humidity.toFixed(0)} %`;
        
        city.value = localStorage.getItem('.city') || 'Minsk'


    // }   

    // catch(err)  {
    //     if (city.value.length == 0) {
    //         error.textContent = ``;
    //     } 
    //     else {
    //         error.textContent = `Error! City '${city.value}' not found!`;
    //     }
        
    //     weatherIcon.className = 'weather-icon owf';
    //     temperature.textContent = '';
    //     weatherDescription.textContent = '';
    //     wind.textContent = '';
    //     humidity.textContent = '';
    // }  
  
        
}

// function setCity(event) {
//     if (event.code === 'Enter' && city.value.length == 0) {
//         error.textContent = `Error! Enter some city!`;
//     }
// }

// city.addEventListener('keypress', setCity);
    

city.addEventListener('change', getWeather);


function setLocalStorage() {
    localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setLocalStorage);



function getLocalStorage() {
    if(localStorage.getItem('city')) {
      city.value = localStorage.getItem('city');
      getWeather();
    }
  }
window.addEventListener('load', getLocalStorage);





  export function init(){   

    getWeather();
    // setCity();
    setLocalStorage();
    getLocalStorage();


}

