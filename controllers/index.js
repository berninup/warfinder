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
        Card.find().distinct('faction', (error, allFaction) =>{
            res.render('index.ejs', {
                card: allCard,
                faction: allFaction
            })
        })
        
    })
})


module.exports = indexRouter