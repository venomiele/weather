let apiKey = "8f37f1ba355762f580f8e490552ced71";
let cityEl = document.querySelector(".location-timezone");
let iconEl = document.querySelector(".icon");
let degreeEl = document.querySelector(".degree");
let descEl = document.querySelector(".description");
let humEl = document.getElementById("humidity");
let windEl = document.getElementById("windspeed");
let btn =  document.querySelector(".submit");
let search =  document.querySelector(".search");
let section = document.querySelector(".display");
let data = undefined;

async function fetchWeather (city) {
    try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey);
        data =  await response.json();
        displayWeather(data);

    } catch {
        alert("Something went wrong,or the city may not exist!")
    }

}

function displayWeather(data) {
const { name } = data;
const {icon, description} = data.weather[0];
const {temp, humidity} = data.main;
const {speed} = data.wind;
cityEl.innerText = "Weather in" + " " + name;
iconEl.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
descEl.innerText = description;
degreeEl.innerText = Math.round(temp) + "°C";
humEl.innerText = "Humidity:" + " " + humidity + "%";
windEl.innerText = "Windspeed:" + " " + speed + "km/h";
}

window.addEventListener("load", () => {
section.style.display = " none";
btn.addEventListener("click", (e) => {
    e.preventDefault();
        section.style.display = "block";
        result = search.value;
            fetchWeather(result);
            document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + result + "')";
            search.value = "";
        });
    });

