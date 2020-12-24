import { GET_WARDS ,UPDATED,GET_ROOMS,UPDATED_ROOM,ERROR_MESSAGE} from '../actiontypes/actiontypes';
import WardService from '../Services/WardService'
import history from '../history'
import RoomService from '../Services/RoomService'

 export const getEmployees = () => {
 return dispatch => {
 return WardService.getAllWards().then((response) => {
 console.log(response.data);
 dispatch({ type: GET_WARDS, payload: response.data });
 }).catch((res)=>{
     dispatch({type:ERROR_MESSAGE,payload:res.data});
 })
 }
 }
 export const updateRooms=(roomId,room)=>{
     return dispatch=>{
         return RoomService.updateRoom(roomId,room).then((response)=>{
             dispatch({type:UPDATED_ROOM,payload:response.data})
             history.push("/room");
         }).catch((res)=>{
            dispatch({type:ERROR_MESSAGE,payload:res.data});
        })
     }
 }
 export const getRooms=()=>{
     return dispatch =>{
         return RoomService.getAllRooms().then((response)=>{
             dispatch({type:GET_ROOMS,payload:response.data})
         }).catch((res)=>{
            dispatch({type:ERROR_MESSAGE,payload:res.data});
        })
     }
 }
 export const updateData=(wardId,ward)=>{
     return dispatch=>{
         return WardService.updateWard(wardId,ward).then((res)=>{
             
             console.log('data:'+res.data);
             
             dispatch({type:UPDATED,payload:res.data})
             history.push("/ward");
            
         }).catch((res)=>{
            dispatch({type:ERROR_MESSAGE,payload:res.data});
        })
        
     }
     
 }
