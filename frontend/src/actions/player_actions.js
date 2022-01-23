import * as PlayerApiUtil from './../util/player_api_util';

export const RECEIVE_PLAYER = 'RECEIVE_PLAYER';
export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS';

const receivePlayers = (receivedPlayers) => {
    return({
        type: RECEIVE_PLAYERS,
        receivedPlayers
    })
};
const receivePlayer = receivedPlayer => {
    return ({
        type: RECEIVE_PLAYER,
        receivedPlayer
    })
}

export const fetchPlayers = () => dispatch => {
    PlayerApiUtil.fetchPlayers()
        .then(receivedPlayers => dispatch(receivePlayers(receivedPlayers)))
};
export const updatePlayer = updatedPlayer => dispatch => {
    PlayerApiUtil.updatePlayer(updatedPlayer)
        .then(receivedPlayer => dispatch(receivePlayer(receivedPlayer)))
}