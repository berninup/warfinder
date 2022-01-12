const express = require('express');
const indexRouter = express.Router()
const Card = require('../models/card.js')
const cardSeed = require('../models/cardSeed')
const Ability = require('../models/ability')
const abilitySeed = require('../models/abilitySeed')




indexRouter.get('/', (req, res) => {
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
            }).then((allAbility) => {
                res.render('index.ejs', {
                    card: allCard,
                    faction: allFaction,
                    ability: allAbility
                })
            })

        })

    })
})


module.exports = indexRouter