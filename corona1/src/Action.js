import axios from 'axios';
import { GET_ERRORS,GET_MEDICINE } from './type';
export const createmedicine=(medicine,history)=>async dispatch=> {
    try {
        const res =await axios.post ("/api/medicine/insert",medicine)
        history.push("/mainDashboard");
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
}

export const usermedicine=(medicine,history)=>async dispatch=> {
    try {
        const res =await axios.post ("/api/medicine/addcart",medicine)
        history.push("/mainDashboard");
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
}