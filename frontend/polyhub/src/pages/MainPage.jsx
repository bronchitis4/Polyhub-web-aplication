import { useEffect, useState } from 'react';
import '../assets/styles/mainPage.css';
import Cookies from 'js-cookie';

const MainPage = ({left, center, rigth}) => {
    const [userId, setUserId] = useState(null);
    useEffect(() => {
        const id = Cookies.get("user_id");
        if (id) {
            console.log("айді: " + id)
            setUserId(id); 
            console.log("Айді юзера: " + userId); 
        }
    
    }, [])
    return(
        <div className="main-page">
            <div className='left-container'>{left}</div>
            <div className='center-container'>{center}</div>
            <div className='right-container'>{rigth || null}</div>
        </div>
    )
}

export default MainPage;