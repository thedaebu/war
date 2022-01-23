const express = require('express');
const router = express.Router();
const Player = require('../../models/Player');

router.get('/', (req, res) => {
    Player.find()
        .then(players => res.json(players))
})

router.put('/:id', (req, res) => {
    Player.findById({ _id: req.params.id })
        .then((player) =>{
            player.wins += 1;
            player.save()
            .then((player) => res.json(player))
        })
})

module.exports = router;