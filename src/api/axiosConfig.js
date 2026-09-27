import axios from 'axios';

export default axios.create({
    baseURL:'http://3.250.76.50:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
