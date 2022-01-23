const express = require('express');
const Player = require('../../models/Player');
const router = express.Router();

router.get('/test', (req, res) => {
    res.json('ayo')
})

router.put('/:id', (req, res) => {
    Player.findOne({ _id: playerId })
        .then((player) =>{
            player.wins += 1;
            player.save()
                .then((player) => res.json(player))
        })
})

module.exports = router;