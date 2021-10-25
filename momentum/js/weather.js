const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');



async function getWeather() {  
   

    const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=en&appid=bf5425e3d31eabbedb3c44fafb1cad2e&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    // console.log(data.weather[0].id, data.weather[0].description, data.main.temp);

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${data.wind.speed} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity} %`;
    const cityField = document.querySelector('.city')
    cityField.value = localStorage.getItem('.city') || 'Минск'
    
    
  }
  getWeather();




  



//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;

  