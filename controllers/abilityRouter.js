const express = require('express');
const abilityRouter = express.Router()
const Card = require('../models/card.js')
const Ability = require('../models/ability')

abilityRouter.get('/ability/:abilityId', (req, res) => {
    Card.find({
        ability: `${req.params.abilityId}`
    }, (error, abilities) => {

        Card.find({}, (error, allCard) => {
            Card.find().distinct('faction', (error, allFaction) => {
                Ability.find({}, (error, allAbility) => {
                    res.render('ability.ejs', {
                        abil: abilities,
                        card: allCard,
                        faction: allFaction,
                        ability: allAbility,

                    })

                })

            })

        })
    })
})

module.exports = abilityRouter