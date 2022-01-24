import { connect } from 'react-redux';
import { updatePlayer } from '../../actions/player_actions';
import { fetchPlayers } from '../../util/player_api_util';
import GameShow from './game_show';

const mDTP = (dispatch) => {
    return ({
        fetchPlayers: () => dispatch(fetchPlayers()),
        updatePlayer: (playerId) => dispatch(updatePlayer(playerId))
    })
};

export default connect(null, mDTP)(GameShow)