const express = require('express');
const deleteRouter = express.Router()
const Card = require('../models/card.js')
const Ability = require('../models/ability')


deleteRouter.delete('/card/:id', (req, res) => {
    Card.findByIdAndDelete(req.params.id, (error, deletedCard) => {
        res.redirect('/')
    })
})


module.exports = deleteRouter