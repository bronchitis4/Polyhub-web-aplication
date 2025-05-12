import { fetchWithAuth } from './authFetch'; 

class ProfileService {
    apiUrl = 'http://localhost:3000';

    getProfileById = async (id) => {
        try {
            const response = await fetchWithAuth(`${this.apiUrl}/profile/${id}`);
            return await response.json();
        } catch (error) {
            return error;
        }
    }
}

export default ProfileService;
