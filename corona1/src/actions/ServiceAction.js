import axios from 'axios';
import { GET_ERRORS, GET_PROJECTS,GET_PROJECT,GET_SERVICE,DELETE_PROJECT } from './type';
export const createPatient=(project,history)=>async dispatch=> {
    try {
        await axios.post ("/api/v1/laboratory",project)
        history.push("/ViewLaboratory");
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
} 

export const getProjects=()=>async dispatch=>{
    const res=await axios.get("/api/v1/laboratory/all");
    dispatch({
        type:GET_PROJECTS,
        payload:res.data
    })
} 

export const getProject=(id,history)=>async dispatch=>{
    const res=await axios.get(`/api/v1/laboratory/${id}`);
    dispatch({
        type:GET_PROJECT,
        payload:res.data
    })
} 
export const getService=(serviceId,history)=>async dispatch=>{
    const res=await axios.get(`/api/v1/laboratory/serviceId/${serviceId}`);
    dispatch({
        type:GET_SERVICE,
        payload:res.data
    })
} 
export const deleteProject=(serviceId)=>async dispatch=>{
    if(window.confirm("Are you sure ? This will delete the service and the data related to it")) {
        await axios.delete(`/api/v1/laboratory/delete/${serviceId}`);
        dispatch({
            type:DELETE_PROJECT,
            payload:serviceId
        })
    }
} 