const Reducer = (state = [], action) => {
 
    switch (action.type) {
    
    case 'UPDATED':
        console.log(action.type);
        console.log('action'+action.payload)
        
        return{...state,payload:action.payload};
        case 'ERROR_MESSAGE':
            return [...state];
    default:
    return [state];
    }
    }
    export default Reducer;
   