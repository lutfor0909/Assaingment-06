// Dont not show API key on your JS file.

const API_KEY = '0181fdb3127b941f3fc5aa8039c4f340';

const loadTemperature = city  =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    fetch(url)
    .then(res =>res.json())
    .then(data =>  console.log(data))
}
loadTemperature('dhaka');