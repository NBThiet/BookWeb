import axios from 'axios';

const apiRequest = axios.create({
    baseURL: 'https://example-data.draftbit.com/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiRequest;
