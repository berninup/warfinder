const express = require('express');
const newRouter = express.Router()
const Card = require('../models/card.js')
const Ability = require('../models/ability');



newRouter.get('/new/card', (req, res) => {
    Ability.find({}, (error, allAbilities) => {
        Card.find().collation({locale: 'en', strength: 2}).sort({name:1}).then( (allCard) => {
            Card.find().distinct('faction', (error, allFaction) => {
                Ability.find().collation({locale: 'en', strength:2}).sort({name:1}).then( (allAbility) => {
                    res.render('newCard.ejs', {
                        card: allCard,
                        faction: allFaction,
                        ability: allAbilities,
                        

                    })
                })
            })
        })
       
    })
    
    })

newRouter.post('/', (req, res) => {
    Card.create(req.body, (error, newCard) => {
        res.redirect('/')
    })
})




module.exports = newRouter