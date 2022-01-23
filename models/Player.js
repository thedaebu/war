const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    wins: {
        type: Number,
        default: 0,
        required: true
    }
})

const Player = mongoose.model('Player', PlayerSchema);
module.exports = Player;