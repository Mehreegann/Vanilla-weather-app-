function updateWeather(response) {
  let temperatureElement = document.querySelector("#tempreture");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("themainheader");
  cityElement.innerHTML = response.date.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apikey = "2ee514187aa05b3a9e6c3f3oefdaf2ta";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key={api}`;
  axios.get(apiUrl).then(updateWeather);
  //make api call and update the interface
}

function handelSearchSubmit(event) {
  event.preventDefault();
  let searchinput = document.querySelector("#searchfforminput");
  searchCity(searchinput.value);
}

let searchForElement = document.querySelector("#searchfform");
searchForElement.addEventListener("submit", handelSearchSubmit);
