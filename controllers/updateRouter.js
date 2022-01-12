const express = require('express');
const updateRouter = express.Router()
const Card = require('../models/card.js')
const Ability = require('../models/ability')



updateRouter.put('/card/:id', (req, res) => {
    Card.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    }, (error, updatedCard) => {
        res.redirect(`/card/${req.params.id}`)
    })
})



updateRouter.get('/card/:id/edit', (req, res) => {
    Card.findById(req.params.id, (error, foundCard) => {
        Card.find().distinct('faction', (error, allFaction) => {
            Ability.find().collation({
                locale: 'en',
                strength: 2
            }).sort({
                name: 1
            }).then((allAbility) => {
                res.render('edit.ejs', {
                    editCard: foundCard,
                    faction: allFaction,
                    ability: allAbility,

                })
            })
        })

    })
})

module.exports = updateRouter