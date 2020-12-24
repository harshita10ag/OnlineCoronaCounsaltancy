import axios from 'axios';
import { GET_ERRORS,GET_PATIENTS} from './type';
export const createPatient=(patient,history)=>async dispatch=> {
    try {
        const res =await axios.post ("/api/v1/newpatient",patient)
        alert("Patient saved with following details:\nName: " + res["data"]["patientName"] + "\nAge: " + res["data"]["age"] + "\nMobile Number: " + res["data"]["mobileNumber"] + "\nAddress: " + res["data"]["address"] +"\nBloodGroup: " + res["data"]["bloodGroup"]);
        history.push("/getPatient");
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
}

export const getPatients=()=>async dispatch=>{
    const res=await axios.get("/api/v1/newpatient/all");
    dispatch({
        type:GET_PATIENTS,
        payload:res.data
    })
}