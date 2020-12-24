import {combineReducers} from 'redux';
import roomReducer from './getroomreducers';
import errorReducer from './errorReducer';
import serviceReducer from './serviceReducer';
import patientsReducer from './patientsReducer'
import employeeReducer from './reducers';
import updateRoomReducer from './RoomUpdate';
import Reducer from './updatereducer';
export default combineReducers({

    errors:errorReducer,
    projects:serviceReducer,
    patients:patientsReducer,
    getlist: employeeReducer,
    data:Reducer,
    rooms:roomReducer,
    updateRoom:updateRoomReducer
 });
 