// default city

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Rasht&appid=2734a7b8dd707cdcc2438ce64d9c70e6&units=metric`;
let sheUrl = `https://api.shecodes.io/weather/v1/forecast?query=Rasht&key=oc477bd2561ta06ef43b2feb3e10e132&units=metric`;
let sheUrlNow = `https://api.shecodes.io/weather/v1/current?query=Rasht&key=oc477bd2561ta06ef43b2feb3e10e132&units=metric`;
let parisUrl = `https://api.shecodes.io/weather/v1/current?query=Paris&key=oc477bd2561ta06ef43b2feb3e10e132&units=metric`;
let sydneyUrl = `https://api.shecodes.io/weather/v1/current?query=Sydney&key=oc477bd2561ta06ef43b2feb3e10e132&units=metric`;
let londonUrl = `https://api.shecodes.io/weather/v1/current?query=London&key=oc477bd2561ta06ef43b2feb3e10e132&units=metric`;
let tehranUrl = `https://api.shecodes.io/weather/v1/current?query=Tehran&key=oc477bd2561ta06ef43b2feb3e10e132&units=metric`;
axios.get(parisUrl).then(parisIcon);
axios.get(sydneyUrl).then(sydneyIcon);
axios.get(londonUrl).then(londonIcon);
axios.get(tehranUrl).then(tehranIcon);
axios.get(sheUrlNow).then(currentIcon);
axios.get(sheUrl).then(forecast);
axios.get(apiUrl).then(showTemperature);

function parisIcon(response) {
  let paris = document.querySelector(".parisEmoji");
  paris.setAttribute("src", response.data.condition.icon_url);
  paris.setAttribute("alt", response.data.condition.description);
}
function sydneyIcon(response) {
  let sydney = document.querySelector(".sydneyEmoji");
  sydney.setAttribute("src", response.data.condition.icon_url);
  sydney.setAttribute("alt", response.data.condition.description);
}
function londonIcon(response) {
  let london = document.querySelector(".londonEmoji");
  london.setAttribute("src", response.data.condition.icon_url);
  london.setAttribute("alt", response.data.condition.description);
}
function tehranIcon(response) {
  let tehran = document.querySelector(".tehranEmoji");
  tehran.setAttribute("src", response.data.condition.icon_url);
  tehran.setAttribute("alt", response.data.condition.description);
}

// favorite city
function paris() {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=2734a7b8dd707cdcc2438ce64d9c70e6&units=metric`;
  let sheUrl = `https://api.shecodes.io/weather/v1/forecast?query=Paris&key=oc477bd2561ta06ef43b2feb3e10e132&units=metric`;
  let sheUrlNow = `https://api.shecodes.io/weather/v1/current?query=Paris&key=oc477bd2561ta06ef43b2feb3e10e132&units=metric`;
  axios.get(sheUrlNow).then(currentIcon);
  axios.get(sheUrl).then(forecast);
  axios.get(apiUrl).then(showTemperature);
}
let parisButton = document.querySelector(".paris");
parisButton.addEventListener("click", paris);

function sydney() {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=2734a7b8dd707cdcc2438ce64d9c70e6&units=metric`;
  let sheUrl = `https://api.shecodes.io/weather/v1/forecast?query=Sydney&key=oc477bd2561ta06ef43b2feb3e10e132&units=metric`;
  let sheUrlNow = `https://api.shecodes.io/weather/v1/current?query=Sydney&key=oc477bd2561ta06ef43b2feb3e10e132&units=metric`;
  axios.get(sheUrlNow).then(currentIcon);
  axios.get(sheUrl).then(forecast);
  axios.get(apiUrl).then(showTemperature);
}
let sydneyButton = document.querySelector(".sydney");
sydneyButton.addEventListener("click", sydney);

function london() {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=2734a7b8dd707cdcc2438ce64d9c70e6&units=metric`;
  let sheUrl = `https://api.shecodes.io/weather/v1/forecast?query=London&key=oc477bd2561ta06ef43b2feb3e10e132&units=metric`;
  let sheUrlNow = `https://api.shecodes.io/weather/v1/current?query=London&key=oc477bd2561ta06ef43b2feb3e10e132&units=metric`;
  axios.get(sheUrlNow).then(currentIcon);
  axios.get(sheUrl).then(forecast);
  axios.get(apiUrl).then(showTemperature);
}
let londonButton = document.querySelector(".london");
londonButton.addEventListener("click", london);

function tehran() {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tehran&appid=2734a7b8dd707cdcc2438ce64d9c70e6&units=metric`;
  let sheUrl = `https://api.shecodes.io/weather/v1/forecast?query=Tehran&key=oc477bd2561ta06ef43b2feb3e10e132&units=metric`;
  let sheUrlNow = `https://api.shecodes.io/weather/v1/current?query=Tehran&key=oc477bd2561ta06ef43b2feb3e10e132&units=metric`;
  axios.get(sheUrlNow).then(currentIcon);
  axios.get(sheUrl).then(forecast);
  axios.get(apiUrl).then(showTemperature);
}
let tehranButton = document.querySelector(".tehran");
tehranButton.addEventListener("click", tehran);

// changing items
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temp = document.querySelector("h1 #CTemp");
  temp.innerHTML = temperature + "°";

  let humidity = Math.round(response.data.main.humidity);
  let Humidity = document.querySelector("#Humidity");
  Humidity.innerHTML = `Humidity : ${humidity} %`;

  let windSpeed = Math.round(response.data.wind.speed);
  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind : ${windSpeed} km/h`;

  let city = response.data.name;
  let City = document.querySelector("#currentCity");
  City.innerHTML = city;

  let descrip = response.data.weather[0].description;
  descrip = descrip[0].toUpperCase() + descrip.slice(1);
  let description = document.querySelector("#description");
  description.innerHTML = descrip;

  let tempMax = Math.round(response.data.main.temp_max);
  let tempMin = Math.round(response.data.main.temp_min);
  let MaxMin = document.querySelector("#MaxMin");
  MaxMin.innerHTML = `${tempMax}° / ${tempMin}°`;

  let cityDate = response.data.dt * 1000;
  let now = new Date(cityDate);
  let time = document.querySelector("p.time");

  function hour() {
    let Hours = now.getHours();
    if (Hours < 10) {
      return "0" + Hours;
    } else {
      return Hours;
    }
  }
  function min() {
    let Min = now.getMinutes();
    if (Min < 10) {
      return "0" + Min;
    } else {
      return Min;
    }
  }
  time.innerHTML = formatDay(response.data.dt) + ", " + hour() + ":" + min();

  // F and C button
  function Farenheit(event) {
    event.preventDefault();
    let currentTemp = document.querySelector("#CTemp");
    let tempMax = response.data.main.temp_max;
    let tempMin = response.data.main.temp_min;
    let MaxMin = document.querySelector("#MaxMin");
    MaxMin.innerHTML = `${Math.round(tempMax * (9 / 5) + 32)}° / ${Math.round(
      tempMin * (9 / 5) + 32
    )}°`;
    currentTemp.innerHTML = Math.round(temperature * (9 / 5) + 32) + "°";
    CButton.classList.add("Fa");
    FButton.classList.remove("Fa");
  }
  let FButton = document.querySelector("button#Fa");
  FButton.addEventListener("click", Farenheit);

  function C() {
    let currentTemp = document.querySelector("#CTemp");
    let tempMax = Math.round(response.data.main.temp_max);
    let tempMin = Math.round(response.data.main.temp_min);
    let MaxMin = document.querySelector("#MaxMin");
    MaxMin.innerHTML = `${tempMax}° / ${tempMin}°`;
    currentTemp.innerHTML = temperature + "°";
    CButton.classList.remove("Fa");
    FButton.classList.add("Fa");
  }
  let CButton = document.querySelector("button#C");
  CButton.addEventListener("click", C);
}

// forecast
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}
function forecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector(".forecast");
  let forecastHTML = `<div class="row" id="cards">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 6 && index > 0) {
      forecastHTML =
        forecastHTML +
        `
                <div class="card" style="width: 6rem" id="card">
                  <img src="${
                    forecastDay.condition.icon_url
                  }" alt="" id="emojiDayOne" />
                  <span class="days">${formatDay(forecastDay.time)}</span>
                  <span class="daysTemp" id="dayOneTemp">${Math.round(
                    forecastDay.temperature.maximum
                  )}° / ${Math.round(forecastDay.temperature.minimum)}°</span>
                </div>
  `;
    }
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

// current icon
function currentIcon(response) {
  let iconElement = document.querySelector("header .CurrentEmoji");
  let icon = response.data.condition.icon;
  iconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${icon}.png`
  );
  iconElement.setAttribute("alt", response.data.condition.description);
}

// search box
function search(event) {
  event.preventDefault();
  let input = document.querySelector("#search-box");
  input = input.value.trim();
  let inputTrim = input[0].toUpperCase() + input.slice(1);
  let city = document.querySelector("strong#currentCity");
  city.innerHTML = inputTrim;

  let sheUrl = `https://api.shecodes.io/weather/v1/forecast?query=${inputTrim}&key=oc477bd2561ta06ef43b2feb3e10e132&units=metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputTrim}&appid=2734a7b8dd707cdcc2438ce64d9c70e6&units=metric`;
  let sheUrlNow = `https://api.shecodes.io/weather/v1/current?query=${inputTrim}&key=oc477bd2561ta06ef43b2feb3e10e132&units=metric`;
  axios.get(sheUrlNow).then(currentIcon);
  axios.get(sheUrl).then(forecast);
  axios.get(apiUrl).then(showTemperature);
}
let searchButton = document.querySelector("form");
searchButton.addEventListener("submit", search);

// Current Location button
function success(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let Url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=2734a7b8dd707cdcc2438ce64d9c70e6&units=metric`;
  let sheUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=oc477bd2561ta06ef43b2feb3e10e132&units=metric`;
  let sheUrlNow = `https://api.shecodes.io/weather/v1/current?lat=${latitude}&lon=${longitude}&key=oc477bd2561ta06ef43b2feb3e10e132&units=metric`;
  axios.get(sheUrlNow).then(currentIcon);
  axios.get(sheUrl).then(forecast);
  axios.get(Url).then(showTemperature);
}

function CurrentLoc() {
  navigator.geolocation.getCurrentPosition(success);
}

let Manage = document.querySelector("button.Manage");
Manage.addEventListener("click", CurrentLoc);
