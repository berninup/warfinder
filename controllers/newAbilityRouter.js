const express = require('express');
const newAbilityRouter = express.Router()
const Card = require('../models/card.js')
const Ability = require('../models/ability.js');


newAbilityRouter.get('/new/ability', (req, res) => {
    Ability.find({}, (error, allAbilities) => {
        Card.find().collation({
            locale: 'en',
            strength: 2
        }).sort({
            name: 1
        }).then((allCard) => {
            Card.find().distinct('faction', (error, allFaction) => {
                Ability.find().collation({
                    locale: 'en',
                    strength: 2
                }).sort({
                    name: 1
                }).then((error, allAbility) => {
                    res.render('newAbility.ejs', {
                        card: allCard,
                        faction: allFaction,
                        ability: allAbilities,

                    })
                })
            })
        })

    })
})

newAbilityRouter.post('/ability', (req, res) => {
    Ability.create(req.body, (error, newAbility) => {
        res.redirect('/')
    })
})

module.exports = newAbilityRouter