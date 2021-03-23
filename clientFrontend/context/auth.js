import React, {useReducer,createContext,useEffect} from 'react';
import jwtDecode from 'jwt-decode';

const initialState = {
    user: null
  };
  

 

const AuthContext = createContext({
    user:null,
    login:(userData) =>{},
    logout:() =>{},
})


function authReducer(state,action){
    switch(action.type){
        case'LOGIN':
        
            return{
                ...state,
                user:action.payload
            }
        case 'LOGOUT':
            return{
                ...state,
                user:null
            }
            
            
        default:
            return state;
    }

}

function AuthProvider(props){
    const [state,dispatch] = useReducer(authReducer,initialState);

    function login(userData){
        sessionStorage.setItem("jwtToken",userData.token);
        sessionStorage.setItem("username",userData.firstName);

        
        dispatch({

         

            type:'LOGIN',
            payload:userData,
            
        })
    }
   
   
    function logout(){
        sessionStorage.removeItem("jwtToken")
        sessionStorage.removeItem("username")
        window.location.reload(true)
        dispatch({type:'LOGOUT'});
    }
    return(
        
        <AuthContext.Provider 
        value={{user:state.user,login,logout}}
        {...props}
        
        />
    )
}

export {AuthContext,AuthProvider};
