import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';


export const signin =(formData,history) => async (dispatch)=>{
    try {
        await console.log("formData")
        const {data} = await api.signin(formData); 
        dispatch({type:AUTH ,data})
        history.push('/dashboard')
    } catch (error) {
        console.log(error)
        
    }

}