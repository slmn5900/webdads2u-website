import Cookies from 'js-cookie';

const fetchHandler = async ({ method, endpoint, data }) => {
    const API_BASE_URLS = process.env.NEXT_PUBLIC_API_BASE_URL + endpoint;
    const headers = {
        'Content-Type': 'application/json'
    };
    const accessToken = Cookies.get('token');
    if (accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`;
    }
    const options = {
        method,
        headers,
        cache: 'no-cache',
        credentials: 'same-origin'
    };

    if (method !== 'GET' && data) {
        options.body = JSON.stringify(data);
    }
    try {
        const response = await fetch(API_BASE_URLS, options);
        const responseText = await response.text();
        if (response.ok) {
            const result = JSON.parse(responseText);
            return result;
        } else {
            let result;
            try {
                result = JSON.parse(responseText);
            } catch (e) {
                result = responseText;
            }
            return { isError: true, error: result };
        }
    } catch (error) {
        console.error('Fetch error:', error);
        return { isError: true, error: "We can't process your request at this time. Please try later." };
    }
};

export default fetchHandler;



export const fetchHandler2 = async ({ method, endpoint, data }) => {
    const API_BASE_URLS = process.env.NEXT_PUBLIC_API_BASE_URL + endpoint;
    const headers = {
        'Content-Type': 'application/json'
    };
    const accessToken = Cookies.get('token');
    if (accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`;
    }
    const options = {
        method,
        headers,
        cache: 'no-cache',
        credentials: 'same-origin'
    };

    if (method !== 'GET' && data) {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(API_BASE_URLS, options);

        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            const result = await response.json();
            return { isError: true, error: result };
        }
    } catch (error) {
        console.error('Fetch error:', error);
        return { isError: true, error: "We can't process your request at this time. Please try later." };
    }
};



export const fetchHandlerForm = async ({ method, endpoint, body }) => {
    const API_BASE_URLS = `${process.env.NEXT_PUBLIC_API_BASE_URL}` + endpoint;
    const headers = {};

    const accessToken = Cookies.get('token');
    if (accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`;
    }

    const options = {
        method,
        headers,
        cache: 'no-cache',
        credentials: 'same-origin'
    };

    if (method !== 'GET' && body) {
        options.body = body; 
    }

    try {
        const response = await fetch(API_BASE_URLS, options);

        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            const result = await response.json();
            return { isError: true, error: result };
        }
    } catch (error) {
        console.error('Fetch error:', error);
        return { isError: true, error: "We can't process your request at this time. Please try later." };
    }
};
