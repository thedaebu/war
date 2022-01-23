import { combineReducers } from 'redux';
import PlayersReducer from './players_reducer';

const RootReducer = combineReducers({
    players: PlayersReducer
});

export default RootReducer;