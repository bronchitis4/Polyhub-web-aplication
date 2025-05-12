import { use } from "react";

const API_URL = 'http://localhost:3000';

export async function refreshToken() {
    const user = JSON.parse(localStorage.getItem('User'));
    const user_id = user.user_id;
    try {
        const response = await fetch(`${API_URL}/auth/refresh`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({user_id}),
        });

        const data = await response.json();
        console.log(data);

        if (!response.ok) throw new Error('Не вдалося оновити токен');
        localStorage.setItem('accessToken', data.data.accessToken);
        return data.data.accessToken;
    } catch (error) {
        console.error('Помилка оновлення токена:', error);
        throw error;
    }
}


export async function fetchWithAuth(url, options = {}, retry = true) {
    const token = localStorage.getItem('accessToken');

    const headers = {
        ...options.headers,
        'Authorization': `Bearer ${token}`,
    };

    try {
        const response = await fetch(url, { ...options, headers });

        if (response.status === 401 && retry || response.status === 403 && retry) {
            const newToken = await refreshToken();
            return fetchWithAuth(url, { ...options, headers: { ...options.headers, 'Authorization': `Bearer ${newToken}` } }, false);
        }

        return response;
    } catch (error) {
        throw error;
    }
}
