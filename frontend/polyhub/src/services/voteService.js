import { fetchWithAuth } from './authFetch'; // змінити шлях за потребою

class VoteService {
    apiUrl = 'http://localhost:3000';

    async createVote(data) {
        try {
            const response = await fetchWithAuth(`${this.apiUrl}/votes/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            return await response.json();
        } catch (error) {
            return error;
        }
    }

    getActivesDataById = async (id) => {
        
    }
}

export default VoteService;
