import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://proval-aa746.firebaseio.com/'
});

export default instance;