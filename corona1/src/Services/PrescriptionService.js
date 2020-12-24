import axios from 'axios'

const PRESCRIPTION_REST_API_URL = 'http://localhost:8080/prescription';

class PrescriptionService {
    getPrescriptions(){
        return axios.get(PRESCRIPTION_REST_API_URL);
    }

    createPrescription(prescription){
        return axios.post(PRESCRIPTION_REST_API_URL+"/add",  prescription);
    }
}

export default new PrescriptionService();