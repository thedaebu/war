import { connect } from 'react-redux';
import { fetchPlayers, updatePlayer } from '../../actions/player_actions';
import GameBoard from './game_board';

const mSTP = (state) => {
    return ({
        players: state.entities.players
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchPlayers: () => dispatch(fetchPlayers()),
        updatePlayer: (playerId) => dispatch(updatePlayer(playerId))
    })
};

export default connect(mSTP, mDTP)(GameBoard)