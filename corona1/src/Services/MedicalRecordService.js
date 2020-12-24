import axios from 'axios'

const MEDICAL_RECORD_REST_API_URL = 'http://localhost:8080/doctor';

class MedicalRecordService {
    getMedicalRecords(){
        return axios.get(MEDICAL_RECORD_REST_API_URL);
    }

    createMedicalRecord(medicalRecord){
        return axios.post(MEDICAL_RECORD_REST_API_URL+"/add",  medicalRecord);
    }
}

export default new MedicalRecordService();