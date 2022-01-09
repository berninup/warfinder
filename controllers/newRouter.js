const express = require('express');
const newRouter = express.Router()
const Card = require('../models/card.js')
const Ability = require('../models/ability');


newRouter.get('/new', (req, res) => {
    Ability.find({}, (error, allAbilities) => {
        res.render('new.ejs', {
            ability: allAbilities
        })
    })
    
    })

newRouter.post('/', (req, res) => {
    Card.create(req.body, (error, newCard) => {
        res.redirect('/')
    })
})

module.exports = newRouter