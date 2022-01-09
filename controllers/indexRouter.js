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


// indexRouter.get('/', (req, res) => {
//     Card.find({}, (error, allCard) => {
//         Card.find().distinct('faction', (error, allFaction) => {
//             Ability.find({}, (error, allAbility) => {
//                 res.render('index.ejs', {
//                     card: allCard,
//                     faction: allFaction,
//                     ability: allAbility
//                 })
//             })

//         })

//     })
// })



indexRouter.get('/', (req, res) => {
    Card.find().collation({locale: 'en', strength: 2}).sort({name:1}).then( (allCard) =>{
        Card.find().distinct('faction', (error, allFaction) => {
            Ability.find().collation({locale: 'en', strength: 2}).sort({name:1}).then( (allAbility) => {
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