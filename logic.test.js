const { getWeatherIcon, parseWeatherData } = require('./logic');


test("returns correct icon for Clouds", () => {
    expect(getWeatherIcon("Clouds")).toBe("images/clouds.png");
});

test("returns default empty icon for unknown condition", () => {
    expect(getWeatherIcon("Fog")).toBe("");
});

test("parses weather data correctly", () => {
    const fake = {
        name: "Karachi",
        main: { temp: 30.6, humidity: 60 },
        wind: { speed: 8 },
        weather: [{ main: "Rain" }]
    };

    expect(parseWeatherData(fake)).toEqual({
        city: "Karachi",
        temperature: "31°C",
        humidity: "60%",
        wind: "8Km/h",
        icon: "images/rain.png"
    });
});
