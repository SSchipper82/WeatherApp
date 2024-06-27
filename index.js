let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let dayOfWeek = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();

function search(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#city");
  let h1 = document.querySelector("h1");
  if (searchInput.value) {
    h1.innerHTML = searchInput.value;

    let city = searchInput.value;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=42e3843f5a1o23bbecft2941cf530850&units=imperial`;

    function showTemp(response) {
      let temperatureElement = document.querySelector(".temp");
      let temperature = Math.round(response.data.temperature.current);
      temperatureElement.innerHTML = `${temperature}°F`;
    }

    axios.get(apiUrl).then(showTemp);
  }

  let currentTime = `${dayOfWeek} ${hour}:${minutes}`;
  let time = document.querySelector(".time");
  time.innerHTML = currentTime;
}

let form = document.querySelector("form");
form.addEventListener("submit", search);
