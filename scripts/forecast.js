const key = "Ad7DnqhsrAyBQvG1NYOHLNGyD5aYksOA";
const openKey = "84e1eaba35d0a8c69ce21dac45a35668";

// get OpenCity information

const getOpenCity = async (cityOpen) => {
  const baseOpenCity = "http://api.openweathermap.org/geo/1.0/direct";
  const queryOpenCity = `?q=${cityOpen}&limit=5&appid=${openKey}`;

  const responseOpenCity = await fetch(baseOpenCity + queryOpenCity);
  const dataOpenCity = await responseOpenCity.json();

  console.log(dataOpenCity);
  // console.log(dataOpenCity[0].lat, dataOpenCity[0].lon);
  let coords = [dataOpenCity[0].lat, dataOpenCity[0].lon];
  coords = coords.map((coord) => coord.toFixed(2));
  console.log(coords);

  return coords;
};

// get OpenWeather information
const getOpenWeather = async (cityOpenData) => {
  // might change to city or id
  const baseOpenW = "https://api.openweathermap.org/data/2.5/weather";
  // const queryOpenW = `${cityOpenData}?apikey=${openKey}`;
  const queryOpenW = `?lat=${cityOpenData[0]}&lon=${cityOpenData[1]}&units=metric&appid=${openKey}`;

  const responseW = await fetch(baseOpenW + queryOpenW);
  const dataOpenW = await responseW.json();

  console.log(dataOpenW);

  return dataOpenW[0];
};


// // get weather information
// const getWeather = async (cityData) => {
//   // might change to city or id
//   const base = "http://dataservice.accuweather.com/currentconditions/v1/";
//   const query = `${cityData}?apikey=${key}`;

//   const response = await fetch(base + query);
//   const data = await response.json();

//   return data[0];

//   // console.log(data);
// };

// // get city information

// const getCity = async (city) => {
//   const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
//   const query = `?apikey=${key}&q=${city}`;

//   const response = await fetch(base + query);
//   const data = await response.json();

//   // console.log(data);

//   return data[0];
// };

// getCity("Ansbach")
//   .then((data) => {
//     return getWeather(data.Key);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// getWeather("Ansbach")
// getWeather("167725");
