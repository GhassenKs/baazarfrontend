import React, { Component,useState, useEffect  } from 'react'
import man from '../../../assets/images/dashboard/man.png'
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { Link, useHistory, useLocation } from 'react-router-dom';



const User_panel = ()=>{
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        const token = user?.token;
        
        if (token) {
          const decodedToken = decode(token);
            
          if (decodedToken.exp * 1000 < new Date().getTime());
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);

    return (
        <div>
            <div className="sidebar-user text-center">
                <div><img className="img-60 rounded-circle lazyloaded blur-up" src={man} alt="#" />
                </div>
                <h6 className="mt-3 f-14">{user?.result.firstName} {user?.result.lastName}</h6>
                <p>{user?.result.role}</p>
            </div>
        </div>
    );

};
        
  
export default User_panel

