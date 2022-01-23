import axios from 'axios';

export const fetchPlayers = () => {
    return axios.get('/api/players')
}

export const updatePlayer = updatedPlayer => {
    return axios.put(`/players/${updatedPlayer._id}`, updatedPlayer);
}