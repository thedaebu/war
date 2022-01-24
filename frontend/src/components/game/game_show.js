import React, { useState } from 'react';

function GameShow(props) {
    const { fetchPlayers, player1, player2, updatePlayer } = props;

    const [player1Deck, setPlayer1Deck] = useState([]);
    const [player2Deck, setPlayer2Deck] = useState([]);
    const [showCardStatus, setShowCardStatus] = useState(false);
    const [warIndex, setWarIndex] = useState(2);

    const values = {
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        J: 11,
        Q: 12,
        K: 13,
        A: 143257869
    };

    function gameMenu() {
        if (player1Deck.length === 0 && player2Deck.length === 0) {
            return (
                <div className="game-board">
                    <button className='start-button' onClick={startGame}>
                        Start Game
                    </button>
                </div>
            )
        } else if (player1Deck.length === 0 || player2Deck.length === 0) {
            const winner = player2Deck.length === 0
                ? player1
                : player2;

            const winnerName = player2Deck.length === 0
                ? 'Player 1'
                : 'Player 2';

            updatePlayer(winner._id)
                .then(() => fetchPlayers);

            return (
                <div className='game-board'>
                    <div className='stats'>
                            <p className='wins'>
                                Wins: {player1.wins}
                            </p>
                            <p className='cards'>
                                Cards: {player1Deck.length-1}
                            </p>
                        </div>
                    <div className='player-2'>
                        <div className='stats'>
                            <p className='wins'>
                                Wins: {player2.wins}
                            </p>
                            <p className='cards'>
                                Cards: {player2Deck.length-1}
                            </p>
                        </div>
                    </div>
                    <div className='message'>
                        {winnerName} wins!
                    </div>
                    <button className='action-button' onClick={startGame}>
                        <p>Start New Game</p>
                    </button>
                </div>
            )
        } else {
            return (
                <div className='game-board'>
                    {playGame()}
                </div>
            )
        }
    }

    function startGame() {
        const shuffledCards = shuffleCards(createCards());
        setPlayer1Deck(shuffledCards[0]);
        setPlayer2Deck(shuffledCards[1]);
    }

    function playGame() {
        if (showCardStatus === false) {
            return (
                <div>
                    <div className='player-1'>
                        <div className='stats'>
                            <p className='wins'>
                                Wins: {player1.wins}
                            </p>
                            <p className='cards'>
                                Cards: {player1Deck.length}
                            </p>
                        </div>
                        <div className='card'>
                        </div>
                    </div>
                    <div className='player-2'>
                        <div className='stats'>
                            <p className='wins'>
                                Wins: {player2.wins}
                            </p>
                            <p className='cards'>
                                Cards: {player2Deck.length}
                            </p>
                        </div>
                        <div className='card'>
                        </div>
                    </div>
                    <div className='message'>
                    </div>
                    <button className='action-button' onClick={showCards}>
                        <p>Show Cards</p>
                    </button>
                </div>
            )
        } else {
            const player1Card = player1Deck[warIndex-2];
            const player2Card = player2Deck[warIndex-2];
            let message;
            if (values[player1Card.value] > values[player2Card.value]) {
                message = 'Player 1 Wins';
            } else if (values[player2Card.value] > values[player1Card.value]){
                message = 'Player 2 Wins';
            } else {
                message = 'War';
            }
            if (message !== 'War') {
                return (
                    <div>
                        <div className='player-1'>
                            <div className='stats'>
                                <p className='wins'>
                                    Wins: {player1.wins}
                                </p>
                                <p className='cards'>
                                    Cards: {player1Deck.length-1}
                                </p>
                            </div>
                            <div className='card'>
                                {player1Card.value}
                                {player1Card.suit}
                            </div>
                        </div>
                        <div className='player-2'>
                            <div className='stats'>
                                <p className='wins'>
                                    Wins: {player2.wins}
                                </p>
                                <p className='cards'>
                                    Cards: {player2Deck.length-1}
                                </p>
                            </div>
                            <div className='card'>
                                {player2Card.value}
                                {player2Card.suit}
                            </div>
                        </div>
                        <div className='message'>
                            {message}
                        </div>
                        <button className='action-button' onClick={() => calculateCards(player1Card, player2Card)}>
                            <p>Take Card</p>
                        </button>
                    </div>
                )
            } else {
                return (
                    <div>
                        <div className='player-1'>
                            <div className='stats'>
                                <p className='wins'>
                                    Wins: {player1.wins}
                                </p>
                                <p className='cards'>
                                    Cards: {player1Deck.length-1}
                                </p>
                            </div>
                            <div className='card'>
                                {player1Card.value}
                                {player1Card.suit}
                            </div>
                        </div>
                        <div className='player-2'>
                            <div className='stats'>
                                <p className='wins'>
                                    Wins: {player2.wins}
                                </p>
                                <p className='cards'>
                                    Cards: {player2Deck.length-1}
                                </p>
                            </div>
                            <div className='card'>
                                {player2Card.value}
                                {player2Card.suit}
                            </div>
                        </div>
                        <div className='message'>
                            {message}
                        </div>
                        <button className='action-button' onClick={handleWar}>
                            <p>War</p>
                        </button>
                    </div>
                )
            }
        }
    }

    function showCards(e) {
        e.preventDefault();

        setShowCardStatus(true);
    }

    function calculateCards(player1Card, player2Card) {
        if (values[player1Card.value] > values[player2Card.value]) {
            const deck1 = player1Deck;
            const deck2 = player2Deck;
            deck1.push(deck1.shift());
            deck1.push(deck2.shift());
            setPlayer1Deck(deck1);
            setPlayer2Deck(deck2);
        } else if (values[player2Card.value] > values[player1Card.value]) {
            const deck1 = player1Deck;
            const deck2 = player2Deck;
            deck2.push(deck2.shift());
            deck2.push(deck1.shift());
            setPlayer1Deck(deck1);
            setPlayer2Deck(deck2);
        }
        setShowCardStatus(false);
        setWarIndex(2);
    }

    function handleWar(e) {
        e.preventDefault();

        if (player1Deck[warIndex] > player2Deck[warIndex]) {
            let stake = [];
            const deck1 = player1Deck;
            const deck2 = player2Deck;
            for (let i = 0; i <= warIndex; i++) {
                stake.push(deck1.shift());
                stake.push(deck2.shift());
            }
            deck1.concat(stake);
            setPlayer1Deck(deck1);
            setPlayer2Deck(deck2);
        } else if (player2Deck[warIndex] > player1Deck[warIndex]) {
            let stake = [];
            const deck1 = player1Deck;
            const deck2 = player2Deck;
            for (let i = 0; i <= warIndex; i++) {
                stake.push(deck2.shift());
                stake.push(deck1.shift());
            }
            deck2.concat(stake);
            setPlayer1Deck(deck1);
            setPlayer2Deck(deck2);
        }
        setWarIndex(warIndex+2);
    }

    function createCards() {
        const suits = ['♥', '♦', '♠', '♣'];

        const cards = [];
        for (let suit of suits) {
            for (let value of Object.keys(values)) {
                const card = {
                    suit: suit,
                    value: value
                }
                cards.push(card);
            }
        }
        return cards;
    }

    function shuffleCards(cards) {
        for (let idx1 = 0; idx1 < 52; idx1++) {
            const idx2 = Math.floor(Math.random()*52);
            const saved = cards[idx2];
            cards[idx2] = cards[idx1];
            cards[idx1] = saved;
        }
        const firstDeck = cards.splice(26);
        const secondDeck = cards;
        return [firstDeck, secondDeck];
    }

    return (
        <div>
            {gameMenu()}
        </div>
    )
}

export default GameShow;