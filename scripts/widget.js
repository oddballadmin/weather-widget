// Replace YOUR_API_KEY with your WeatherAPI key
const API_KEY = "";
const locationDiv = document.getElementById("location");
const temperatureDiv = document.getElementById("temperature");

// Get user's location
navigator.geolocation.getCurrentPosition(
    (position) => {
        // Get weather data from WeatherAPI
        fetch(
            `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${position.coords.latitude},${position.coords.longitude}`
        )
            .then((response) => response.json())
            .then((data) => {
                // Update widget with location and temperature
                locationDiv.innerText = `Location: ${data.location.name}`;
                temperatureDiv.innerText = `Temperature: ${data.current.temp_f}°F`;
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    },
    (error) => {
        console.warn("Error:", error.message);
    }
);
