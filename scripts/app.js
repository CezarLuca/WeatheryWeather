const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");

const updateUI = (data) => { // data is what is returned from the promise updateCity, which is the object {CityDetails: cityDets, Weather: weather}

    // console.log(data);
    // These have the same values as the ones in the updateCity function
    const cityDets = data.CityDetails; // , so what is returned from the getOpenCity function
    const weather = data.Weather; // , so what is returned from the getOpenWeather function
    // BUT these are not the same constants though, because they are block scoped and exist only within their functions

    // update details template
    details.innerHTML = `
    <h5 class="my-3">${cityDets.local_names.de}</h5>
    <div class="my-3">${weather.weather[0].description}</div>
    <div class="display-4 my-4">
        <span>${weather.main.temp}</span>
        <span>&deg;C</span>
    </div>
    `;

    // remove the d-none class if present
    if (card.classList.contains("d-none")) {
        card.classList.remove("d-none");
    }

};

cityForm.addEventListener("submit", (event) => {
    // The event listener that triggers the whole script

    const updateCity = async (city) => {
        // console.log(city);

        const cityDets = await getOpenCity(city);
        const weather = await getOpenWeather(cityDets.lat, cityDets.lon);

        return {
            CityDetails: cityDets,
            Weather: weather
        }; // We return an object with the two properties CityDetails and Weather, which are the two constants cityDets and weather,
        // that are respectively the results of the two functions getOpenCity and getOpenWeather
    };


    // Prevent default action
    event.preventDefault();
    
    // Get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // Update the UI with new city
    updateCity(city)
    // .then(data => console.log(data))
    .then(data => updateUI(data))
    .catch(err => console.log(err));
    // data is what is returned from the promise updateCity, which is the object {CityDetails: cityDets, Weather: weather}

});

// const cityForm = document.querySelector("form");
// const card = document.querySelector(".card");
// const details = document.querySelector(".details");
// const time = document.querySelector("img.time");
// const icon = document.querySelector(".icon img");

// const updateUI = (data) => {
//     const cityData = data.cityData;
//     const weather = data.weather;
//     // Object Shorthand Notation, just as above when the key and value are the same
//     // const { cityData, weather } = data;

//     // update details template
//     details.innerHTML = `
//         <h5 class="my-3">${cityData}</h5>
//         <div class="my-3">${weather.weather.description}</div>
//         <div class="display-4 my-4">
//             <span>${weather.Tmain.temp}</span>
//             <span>&deg;C</span>
//         </div>
//     `;

//     // update the night/day & icon images

    

//     // let timeSrc =  weather.IsDayTime ? "img/day.png" : "img/night.png"; // The Original Code
//     const timeSrc = `img/${weather.WeatherIcon}.jpg`;
//     // if (weather.IsDayTime) {
//     //     timeSrc = "img/day.png";
//     // } else {
//     //     timeSrc = "img/night.png";
//     // }
//     time.setAttribute("src", timeSrc);

//     const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
//     icon.setAttribute("src", iconSrc);

//     // remove the d-none class if present
//     if (card.classList.contains("d-none")) {
//         card.classList.remove("d-none");
//     }
// };




// const updateCity = async (city) => {
//   const cityData = await getOpenCity(city);
//   const weather = await getOpenWeather(cityData);

//   return {
//     cityData: cityData[2],
//     weather: weather
//   };
// // Object Shorthand Notation, just as above when the key and value are the same
//     // return { cityData, weather };
// };

// cityForm.addEventListener("submit", (event) => {
//   // Prevent default action
//   event.preventDefault();

//   // Get city value
//   const city = cityForm.city.value.trim();
//   cityForm.reset();

//   // Update the UI with new city
//   // updateCity(city);
//   updateCity(city)
//     .then((data) => updateUI(data))
//     .catch((err) => console.log(err));
//     // .then((data) => console.log(data))
//     // .catch((err) => console.log(err));
// });