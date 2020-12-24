const employeeReducer = (state = [], action) => {
 
    switch (action.type) {
    case 'GET_WARDS':
        console.log(action.payload)
    return action.payload;
    case 'ERROR_MESSAGE':
        return [];

    default:
    return state;
    }
    }
    export default employeeReducer;
   