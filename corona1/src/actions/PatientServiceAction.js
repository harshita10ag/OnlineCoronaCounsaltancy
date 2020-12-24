import axios from 'axios';
import { GET_ERRORS, GET_PROJECTS,GET_PROJECT,GET_SERVICE,DELETE_PROJECT } from './type';
export const createPatientServiceDetail=(project,history)=>async dispatch=> {
    
    try {
        await axios.post ("/api/v1/patientService",project)
        history.push("/viewPatient");
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
} 
export const getProjects=()=>async dispatch=>{
    const res=await axios.get("/api/v1/patientService/all");
    dispatch({
        type:GET_PROJECTS,
        payload:res.data
    })
} 

export const getProject=(id,history)=>async dispatch=>{
    const res=await axios.get(`/api/v1/patientService/${id}`);
    dispatch({
        type:GET_PROJECT,
        payload:res.data
    })
} 
export const getService=(id,history)=>async dispatch=>{
    const res=await axios.get(`/api/v1/patientService/id/${id}`);
    dispatch({
        type:GET_SERVICE,
        payload:res.data
    })
} 
export const deleteProject=(id)=>async dispatch=>{
    if(window.confirm("Are you sure ? This will delete the service and the data related to it")) {
        await axios.delete(`/api/v1/patientService/delete/${id}`);
        dispatch({
            type:DELETE_PROJECT,
            payload:id
        })
    }
} 