let apiKey = "8f37f1ba355762f580f8e490552ced71";
let cityEl = document.querySelector(".location-timezone");
let iconEl = document.querySelector(".icon");
let degreeEl = document.querySelector(".degree");
let descEl = document.querySelector(".description");
let humEl = document.getElementById("humidity");
let windEl = document.getElementById("windspeed");

async function fetchWeather (city) {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey);
    const data =  await response.json();
    console.log(data);
    displayWeather(data);
}
fetchWeather("tokyo");

function displayWeather(data) {
const { name } = data;
const {icon, description} = data.weather[0];
const {temp, humidity} = data.main;
const {speed} = data.wind;
}


// window.addEventListener("load", () => {
//     let long;
//     let lat;
//     if(navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(position => {
//             long = position.coords.longitude;
//             lat = position.coords.latitude;
//         });
//     }
// })

