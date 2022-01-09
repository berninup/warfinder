const express = require('express');
const newAbilityRouter = express.Router()
const Card = require('../models/card.js')
const Ability = require('../models/ability.js');


newAbilityRouter.get('/new/ability', (req, res) => {
    Ability.find({}, (error, allAbilities) => {
        res.render('newAbility.ejs', {
            ability: allAbilities
        })
    })
})

newAbilityRouter.post('/ability', (req, res) => {
    Ability.create(req.body, (error, newAbility) => {
        res.redirect('/')
    })
})

module.exports = newAbilityRouter