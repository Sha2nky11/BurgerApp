import axios from 'axios';

const instance = axios.create(
    {
        baseURL:'https://react-my-burger-e9ff3.firebaseio.com/'
    }
);

export default instance;