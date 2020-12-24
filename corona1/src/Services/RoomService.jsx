import axios from 'axios';

const PATIENT_API_BASE_URL = "/api/v2/data1";

class RoomService {
    getAllRooms(){
        return axios.get(PATIENT_API_BASE_URL);
    }

   
    getRoomById(RoomId){
        return axios.get(PATIENT_API_BASE_URL + '/id/' + RoomId);
    }
    getAvail(RoomId){
        return axios.get(PATIENT_API_BASE_URL + '/' + RoomId);
    }

    updateRoom(RoomId, room){
        return axios.put(PATIENT_API_BASE_URL + '/' + RoomId, room);
    }

   
}

export default new RoomService()