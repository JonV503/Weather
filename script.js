document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const API_KEY = 'your_api_key_here';
const city = 'London';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('weatherInfo').innerHTML = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            } else {
                document.getElementById('weatherInfo').innerHTML = `<p>City not found!</p>`;
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});
