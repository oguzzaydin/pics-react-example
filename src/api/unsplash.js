import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID 6f015907a038ce09e152e9dc0df74debd3466b9fa5178d960a42937d0b39d322',
    }
});