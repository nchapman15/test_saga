import axios from 'axios';

export const getUsers = () => {
    const res = axios.get('/maps', {});
    return res;
};
