const mongoose = require('mongoose');

const abilitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: String,
    value: {
        type: Number,
        required: true,
    }
})

const Ability = mongoose.model('ability', abilitySchema)

module.exports = Ability;