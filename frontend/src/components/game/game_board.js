import React, { useEffect } from 'react';
import GameShowContainer from './game_show_container';

function GameBoard(props) {
    const { fetchPlayers, players } = props;

    const player1 = players['61ec349577399f75464387d5']
    const player2 = players['61ec349577399f75464387d6']

    useEffect(() => {
        fetchPlayers();
    }, [])

    return (
        <div>
            <GameShowContainer 
                player1={player1}
                player2={player2}
            />
        </div>
    )
}

export default GameBoard;