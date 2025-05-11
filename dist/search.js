function getWeather() {
    let city = document.getElementById("city").value;
    let apiKey = "42ef5c5b16905a9e3c2527995eda378c";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
        .then(function (response) {
            response.json().then(function (data) {
                let temp = data.main.temp;
                let description = data.weather[0].description;
                document.getElementById("result").innerText = `Temp: ${temp}°C, ${description}`;
            });
        });
  }