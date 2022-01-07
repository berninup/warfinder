const express = require('express');
const indexRouter = express.Router()
const Card = require('../models/card.js')
const cardSeed = require('../models/cardSeed')


indexRouter.get('/seed', (req, res) => {
    Card.create(cardSeed, (error, data) => {
        res.redirect('/')
    })
})


indexRouter.get('/', (req, res) => {
    Card.find({}, (error, allCard) => {
        res.render('index.ejs', {
            card: allCard
        })
    })
})


module.exports = indexRouter