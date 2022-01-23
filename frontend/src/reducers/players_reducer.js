import { RECEIVE_PLAYER, RECEIVE_PLAYERS } from "../actions/player_actions";

const PlayersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PLAYER:
            return Object.assign({}, state, {[action.receivedPlayer._id]: action.receivedPlayer})
        case RECEIVE_PLAYERS:
            const players = Object();
            action.receivedPlayers.forEach(player => {
                players[player._id] = player
            })
            return Object.assign({}, players);
        default:
            return state;
    }
}

export default PlayersReducer;