


async function getWeather() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
  }
  getWeather()