function getWeatherIcon(condition) {
    const icons = {
        Clouds: "images/clouds.png",
        Rain: "images/rain.png",
        Clear: "images/clear.png",
        Drizzle: "images/drizzle.png",
        Mist: "images/mist.png",
        Snow: "images/snow.png"
    };
    return icons[condition] || "";
}

function parseWeatherData(data) {
    return {
        city: data.name,
        temperature: Math.round(data.main.temp) + "°C",
        humidity: data.main.humidity + "%",
        wind: data.wind.speed + "Km/h",
        icon: getWeatherIcon(data.weather[0].main)
    };
}

module.exports = { getWeatherIcon, parseWeatherData };
