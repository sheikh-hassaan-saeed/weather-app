const apiKey = "0413d19f27b2905ababaf5ba5acb1a27";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const cityName = document.querySelector('.city');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const temperature = document.querySelector('.temp');
const weatherIcon = document.querySelector('.weather-icon');

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");


function defaultWeather() {
    cityName.innerHTML = "--";
    temperature.innerHTML = "0°C";
    humidity.innerHTML = "0%";
    wind.innerHTML = "0 Km/h";
}

defaultWeather();

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();


    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather-icon").style.display = "none";
        document.querySelector(".wind").style.display = "none";
        document.querySelector(".city").style.display = "none";
        document.querySelector(".humidity").style.display = "none";
        document.querySelector(".temp").style.display = "none";
        document.querySelector(".box1").style.display = "none";
        document.querySelector(".box2").style.display = "none";

    }
    else {
        cityName.innerHTML = data.name;
        temperature.innerHTML = Math.round(data.main.temp) + "°C";
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + "Km/h";

        searchBox.value = '';

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        }

        document.querySelector(".weather").style.display = "block";

    }


}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

