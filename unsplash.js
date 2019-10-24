import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d0cc09c063434e2f1c44cce803e09eb6c41e9a2ceca9ccf295c25061d05b0578'
    }
});