const city = document.getElementById("city-name");
const button = document.getElementById("search_button");

const nameofCity = document.getElementById("cityName");
const nameofCountry = document.getElementById("CountryName");
const temp = document.getElementById("temp");
const condition = document.getElementById("condition");
const weatherIcon = document.getElementById("weather-icon");
const windSpeed = document.getElementById("wind-speed");
const windDir = document.getElementById("wind-dir");
const pressure = document.getElementById("pressure");
const humidity = document.getElementById("humidity");
const visibility = document.getElementById("visibility");

async function getData(cityname) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=eeea9ccb07484887ba064045240810&q=${cityname}&aqi=yes`);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener("click", async () => {
    const cityname = city.value;
    const result = await getData(cityname);

    if (result && result.location) {
        nameofCity.innerText = result.location.name;
        nameofCountry.innerText = result.location.country;
        temp.innerText = result.current.temp_c;
        condition.innerText = result.current.condition.text;
        weatherIcon.src = `https:${result.current.condition.icon}`;
        windSpeed.innerText = result.current.wind_kph;
        windDir.innerText = result.current.wind_dir;
        pressure.innerText = result.current.pressure_mb;
        humidity.innerText = result.current.humidity;
        visibility.innerText = result.current.vis_km;
    } else {
        alert("City not found! Please try again.");
    }
});
