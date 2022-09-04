import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
                Authorization: 
                'Client-ID dEsA8R6cXWMT_eDQ7wPlXfqZxvSlZLSg_sSkeX62XOo'
            }
}
);