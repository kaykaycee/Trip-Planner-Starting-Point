const express = require('express')
const router = express.Router()
const models = require('../models')
const db = models.db
const Hotel = models.Hotel
const Place = models.Place
const Activity = models.Activity


router.get('/hotels', (req,res,next) => {
    Hotel.findAll()
    .then(hotels =>{
        res.json(hotels)
    })
    .catch(next)
})
