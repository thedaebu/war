const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI
const bodyParser = require('body-parser');
const players = require('./routes/api/players');
const Player = require('./models/Player')

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    Player.find()
        .then(players => res.json(players))    
})

app.use('/api/players', players);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server is running'))
