const express = require('express')
const router = express.Router()
const models = require('../models')
const db = models.db
const Hotel = models.Hotel
const Place = models.Place
const Activity = models.Activity
const Restaurant = models.Restaurant

// router.get('/hotels', (req,res,next) => {
//     Hotel.findAll()
//     .then(hotels =>{
//         res.json(hotels)
//     })
//     .catch(next)
// })

var allAttractions = {};

router.get('/', (req, res, next) => {
	Hotel.findAll({
		include: [{ all: true }]
	})
		.then(function(hotels) {
		  allAttractions.hotels = hotels;
		  return Restaurant.findAll({
			include: [{ all: true }]
			});
		})
		.then(function(restaurants) {
		  allAttractions.restaurants = restaurants;
		  return Activity.findAll({
			include: [{ all: true }]
		  });
		})
		.then(function(activities) {
		  allAttractions.activities = activities;
		})
		.then(function() {
		  res.json(allAttractions);
		})
		.catch(next);
})

module.exports = router;