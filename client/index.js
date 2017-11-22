const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");

mapboxgl.accessToken = "pk.eyJ1Ijoia2F0aHkxMjM0IiwiYSI6ImNqYTl0b3ViMjBiNXIyd25jdm12aTVlMG4ifQ.yyPzgxriF0oSxWLMiWuJ_A";

const fullstackCoords = [-74.009, 40.705] // NY
// const fullstackCoords = [-87.6320523, 41.8881084] // CHI

const map = new mapboxgl.Map({
  container: "map",
  center: fullstackCoords, // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activities", fullstackCoords);
marker.addTo(map);

fetch('/api')
  .then(resStream => resStream.json())
  .then(dataFromBackend => {
    let select = document.getElementById('hotels-choices')
    dataFromBackend.hotels.forEach(hotel => {
      let option = document.createElement('option');
      option.innerHTML = `${hotel.name}`
      option.value = `${hotel.id}`
      select.append(option)
    })
    return dataFromBackend;
  })
  .then(dataFromBackend => {
    let select = document.getElementById('restaurants-choices')
    dataFromBackend.restaurants.forEach(restaurant => {
      let option = document.createElement('option');
      option.innerHTML = `${restaurant.name}`
      option.value = `${restaurant.id}`
      select.append(option)
    })
    return dataFromBackend;
  })
  .then(dataFromBackend => {
    let select = document.getElementById('activities-choices')
    dataFromBackend.activities.forEach(activity => {
      let option = document.createElement('option');
      option.innerHTML = `${activity.name}`
      option.value = `${activity.id}`
      select.append(option)
    })
  })
  .catch(console.error.bind(console))

document.getElementById('hotels-add')
	.addEventListener('click', () => {
		//
	})



















