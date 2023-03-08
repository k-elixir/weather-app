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
  let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
  ];
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
  time.innerHTML = days[now.getDay()] + ", " + hour() + ":" + min();

  let firstDay = document.querySelector("#dayOne");
  firstDay.innerHTML = days[now.getDay() + 1];

  let secondtDay = document.querySelector("#dayTwo");
  secondtDay.innerHTML = days[now.getDay() + 2];

  let thirdDay = document.querySelector("#dayThree");
  thirdDay.innerHTML = days[now.getDay() + 3];

  let forthDay = document.querySelector("#dayFour");
  forthDay.innerHTML = days[now.getDay() + 4];

  let fifthDay = document.querySelector("#dayFive");
  fifthDay.innerHTML = days[now.getDay() + 5];

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

function forecast(response) {
  let firstDayTemp = document.querySelector("#dayOneTemp");
  firstDayTemp.innerHTML = `${Math.round(
    response.data.daily[0].temperature.maximum
  )}° / ${Math.round(response.data.daily[0].temperature.maximum)}°`;

  let firstDayEmoji = document.querySelector("#emojiDayOne");
  firstDayEmoji.setAttribute("src", response.data.daily[0].condition.icon_url);
  firstDayEmoji.setAttribute(
    "alt",
    response.data.daily[0].condition.description
  );

  let secondtDayTemp = document.querySelector("#dayTwoTemp");
  secondtDayTemp.innerHTML = `${Math.round(
    response.data.daily[1].temperature.maximum
  )}° / ${Math.round(response.data.daily[1].temperature.minimum)}°`;

  let secondDayEmoji = document.querySelector("#emojiDayTwo");
  secondDayEmoji.setAttribute("src", response.data.daily[1].condition.icon_url);
  secondDayEmoji.setAttribute(
    "alt",
    response.data.daily[1].condition.description
  );

  let thirdDayTemp = document.querySelector("#dayThreeTemp");
  thirdDayTemp.innerHTML = `${Math.round(
    response.data.daily[2].temperature.maximum
  )}° / ${Math.round(response.data.daily[2].temperature.minimum)}°`;

  let thirdDayEmoji = document.querySelector("#emojiDayThree");
  thirdDayEmoji.setAttribute("src", response.data.daily[2].condition.icon_url);
  thirdDayEmoji.setAttribute(
    "alt",
    response.data.daily[2].condition.description
  );

  let forthDayTemp = document.querySelector("#dayFourTemp");
  forthDayTemp.innerHTML = `${Math.round(
    response.data.daily[3].temperature.maximum
  )}° / ${Math.round(response.data.daily[3].temperature.minimum)}°`;

  let forthDayEmoji = document.querySelector("#emojiDayFour");
  forthDayEmoji.setAttribute("src", response.data.daily[3].condition.icon_url);
  forthDayEmoji.setAttribute(
    "alt",
    response.data.daily[3].condition.description
  );

  let fifthDayTemp = document.querySelector("#dayFiveTemp");
  fifthDayTemp.innerHTML = `${Math.round(
    response.data.daily[4].temperature.maximum
  )}° / ${Math.round(response.data.daily[4].temperature.minimum)}°`;

  let fifthDayEmoji = document.querySelector("#emojiDayFive");
  fifthDayEmoji.setAttribute("src", response.data.daily[4].condition.icon_url);
  fifthDayEmoji.setAttribute(
    "alt",
    response.data.daily[4].condition.description
  );
}

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
