let city = prompt("Enter a city");

let weather = {
    paris: {
      temp: 19.7,
      humidity: 80
    },
    tokyo: {
      temp: 17.3,
      humidity: 50
    },
    lisbon: {
      temp: 30.2,
      humidity: 20
    },
    "san francisco": {
      temp: 20.9,
      humidity: 100
    },
    oslo: {
      temp: -5,
      humidity: 20
    }
  };


if (weather.hasOwnProperty(city)) {
let cityTemp = Math.round(weather[city].temp);
let cityHumid = weather[city].humidity;
let fahTemp = Math.round((weather[city].temp) * 9 / 5 + 32);
alert(`It is currently ${cityTemp}°C (${fahTemp}°F) in ${city} with a humidity of ${cityHumid}%.`)
} else {
    if (city.length === 0) {
        alert("You forgot to search for a city, silly!");
} else { 
    alert("Sorry we don't have data for that city yet!😢");
} 
}
