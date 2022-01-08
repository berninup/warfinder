const express = require('express');
const indexRouter = express.Router()
const Card = require('../models/card.js')
const cardSeed = require('../models/cardSeed')
const Ability = require('../models/ability')
const abilitySeed = require('../models/abilitySeed')


indexRouter.get('/seed', (req, res) => {
    Card.create(cardSeed, (error, data) => {
        res.redirect('/')
    })
})

indexRouter.get('/abilityseed', (req, res) => {
    Ability.create(abilitySeed, (error, data) => {
        res.redirect('/')
    })
})


indexRouter.get('/', (req, res) => {
    Card.find({}, (error, allCard) => {
        Card.find().distinct('faction', (error, allFaction) => {
            Ability.find({}, (error, allAbility) => {
                res.render('index.ejs', {
                    card: allCard,
                    faction: allFaction,
                    ability: allAbility
                })
            })

        })

    })
})


indexRouter.get('/:factionId', (req, res) => {
    Card.find({faction: `${req.params.factionId}`}, (error, factions) => {
        Card.find({}, (error, allCard) => {
            Card.find().distinct('faction', (error, allFaction) => {
                Ability.find({}, (error, allAbility) => {
                    res.render('faction.ejs', {
                        factions: factions,
                        card: allCard,
                        faction: allFaction,
                        ability: allAbility
                    })
                })

            })

        })
    })
})



module.exports = indexRouter