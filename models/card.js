const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    name: {type: String, required: true},
    faction: String,
    attack: String,
    defense: String,
    mAttack: String,
    mDefense: String,
    ability: [String],
    img: String,
    flavor: String,
    rank: String
})

const Card = mongoose.model('Card', cardSchema)