const express = require('express');
const showRouter = express.Router()
const Card = require('../models/card.js')
const Ability = require('../models/ability')



showRouter.get('/card/:id', (req, res) => {
    Card.findById(req.params.id, (error, foundCard) => {
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
                    res.render('show.ejs', {
                        card: allCard,
                        faction: allFaction,
                        ability: allAbility,
                        cards: foundCard
                    })
                })

            })

        })
    })
})


module.exports = showRouter