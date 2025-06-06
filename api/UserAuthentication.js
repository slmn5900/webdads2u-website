import fetchHandler, { fetchHandlerForm } from './Handler';

export const quirckServiceForm = async (data) => {
    try {
        const response = await fetchHandler({
            method: 'POST',
            endpoint: '/forms/quick-service-request',
            data
        });

        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const contactUsForm = async (data) => {
    try {
        const response = await fetchHandler({
            method: 'POST',
            endpoint: '/forms/contact-us',
            data
        });
        if (response) {
            return response;
        }
    } catch (error) {
        console.error('error showing', error);
        throw error;
    }
};
export const careerForm = async (body) => {
    try {
        const response = await fetchHandlerForm({
            method: 'POST',
            endpoint: '/forms/career',
            body
        });
        if (response) {
            return response;
        }
    } catch (error) {
        console.error('error showing', error);
        throw error;
    }
};
