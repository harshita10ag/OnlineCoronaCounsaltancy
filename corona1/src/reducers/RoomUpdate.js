const updateRoomReducer = (state = [], action) => {
 
    switch (action.type) {
    
    case 'UPDATED_ROOM':
        console.log(action.type);
        console.log('action'+action.payload)
        
        return{...state,payload:action.payload};
        case 'ERROR_MESSAGE':
            return [...state];
    default:
    return [state];
    }
    }
    export default updateRoomReducer;
   