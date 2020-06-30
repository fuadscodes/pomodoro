import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pomodoro-98f43.firebaseio.com/'
});

export default instance;