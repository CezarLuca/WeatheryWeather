const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

const updateUI = (data) => {
    // const cityData = data.cityData;
    // const weather = data.weather;
    // Object Shorthand Notation, just as above when the key and value are the same
    const { cityData, weather } = data;

    // update details template
    details.innerHTML = `
        <h5 class="my-3">${cityData.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    // update the night/day & icon images

    

    // let timeSrc =  weather.IsDayTime ? "img/day.png" : "img/night.png"; // The Original Code
    const timeSrc = `img/${weather.WeatherIcon}.jpg`;
    // if (weather.IsDayTime) {
    //     timeSrc = "img/day.png";
    // } else {
    //     timeSrc = "img/night.png";
    // }
    time.setAttribute("src", timeSrc);

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute("src", iconSrc);

    // remove the d-none class if present
    if (card.classList.contains("d-none")) {
        card.classList.remove("d-none");
    }
};




const updateCity = async (city) => {
  const cityData = await getOpenCity(city);
  const weather = await getOpenWeather(cityData);

//   return {
//     cityData: cityData,
//     weather: weather,
//   };
// Object Shorthand Notation, just as above when the key and value are the same
    return { cityData, weather };
};

cityForm.addEventListener("submit", (event) => {
  // Prevent default action
  event.preventDefault();

  // Get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // Update the UI with new city
  // updateCity(city);
  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
    // .then((data) => console.log(data))
    // .catch((err) => console.log(err));
});
