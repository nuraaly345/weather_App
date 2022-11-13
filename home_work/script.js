const searchBtn = document.querySelector("#search-btn")
const inputText = document.querySelector("#city")
const resultInfo = document.querySelector("#result")


let getWeather = () => {
  let cityValue = inputText.value;
  if (cityValue.length == 0) {
    resultInfo.innerHTML = `<h3 class="msg">Шаардын атын киргизиңиз</h3>`;
  }
  else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    inputText.value = "";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {

        resultInfo.innerHTML = `
        <h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp} &#176;</h1>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.main.temp_min}&#176;</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.main.temp_max}&#176;</h4>
            </div>
        </div>
        `;
      })
  
      .catch(() => {
        resultInfo.innerHTML = `<h3 class="msg">Шаар табылган жок</h3>`;
      });
  }
};
searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);