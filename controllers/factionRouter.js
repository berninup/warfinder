const express = require('express');
const factionRouter = express.Router()
const Card = require('../models/card.js')
const Ability = require('../models/ability')

// factionRouter.get('/faction/:factionId', (req, res) => {
//     Card.find({
//         faction: `${req.params.factionId}`
//     }, (error, factions) => {
//         Card.find({}, (error, allCard) => {
//             Card.find().distinct('faction', (error, allFaction) => {
//                 Ability.find({}, (error, allAbility) => {
//                     res.render('faction.ejs', {
//                         factions: factions,
//                         card: allCard,
//                         faction: allFaction,
//                         ability: allAbility
//                     })
//                 })

//             })

//         })
//     })
// })



factionRouter.get('/faction/:factionId', (req, res) => {
    Card.find({
        faction: `${req.params.factionId}`
    }).collation({locale: 'en', strength:2}).sort({name:1}).then( (factions) => {
        Card.find({}, (error, allCard) => {
            Card.find().distinct('faction', (error, allFaction) => {
                Ability.find().collation({locale: 'en', strength:2}).sort({name:1}).then( (allAbility) => {
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

module.exports = factionRouter