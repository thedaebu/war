import axios from 'axios';

export const fetchPlayers = () => {
    return axios.get('/api/players')
};

export const updatePlayer = playerId => {
    return axios.put(`/api/players/${playerId.toString()}`);
};