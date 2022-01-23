import { combineReducers } from 'redux';
import PlayersReducer from './players_reducer';

const EntitiesReducer = combineReducers({
    players: PlayersReducer
});

export default EntitiesReducer