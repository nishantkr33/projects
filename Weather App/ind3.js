document.getElementById('getWeather').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter a city.');
        return;
    }
    
    const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
            document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('wind').textContent = `Wind Speed: ${data.wind.speed} m/s`;
        })
        .catch(error => {
            alert(error.message);
            document.getElementById('weatherData').innerHTML = '';
        });
});
