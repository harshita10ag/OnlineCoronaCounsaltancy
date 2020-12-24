import axios from 'axios';

const PATIENT_API_BASE_URL = "/api/v1";

class WardService {
    getAllWards(){
        return axios.get(PATIENT_API_BASE_URL+'/data1');
    }

   
    getWardById(WardId){
        return axios.get(PATIENT_API_BASE_URL + '/data1/id/' + WardId);
    }
    getAvail(WardId){
        return axios.get(PATIENT_API_BASE_URL + '/Ward1/' + WardId);
    }

    updateWard(WardId, ward){
        return axios.put(PATIENT_API_BASE_URL + '/data/' + WardId, ward);
    }

   
}

export default new WardService()