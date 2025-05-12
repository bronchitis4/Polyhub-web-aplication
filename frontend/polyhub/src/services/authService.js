class AuthService {
    register = async (data) => {
        try {
            const response = await fetch('http://localhost:3000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();

            return responseData;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    verify = async (data) => {
        // const data = {
        //     email,
        //     verificationClientCode
        //  }; 
        try {
            const response = await fetch('http://localhost:3000/auth/ver', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            
            });
            
            const responseData = await response.json();

            return responseData;
        } catch (error) {
            console.log(error);
        }
    }

    login = async (data) => {
        // const data = {
        //     email,
        //     password
        // };

        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
    
            const responseData = await response.json();
            if(!response.ok){
                throw new Error(responseData.message);
            }

            return responseData;        
        } catch (error) {
            return error;
        }
    }

}

export default AuthService;