const roomReducer = (state = [], action) => {
 
    switch (action.type) {
    
    case 'GET_ROOMS':
        console.log(action.type);
        console.log('action'+action.payload)
        
        return action.payload;
        case 'ERROR_MESSAGE':
            return [];
    default:
    return state;
    }
    }
    export default roomReducer;
   