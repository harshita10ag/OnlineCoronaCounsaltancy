import { GET_PROJECTS, GET_PROJECT, GET_SERVICE, DELETE_PROJECT } from "../actions/type";

const initialState={
    projects:[],
    project:{}
};

export default function(state=initialState,action){
    switch(action.type){
        case GET_PROJECTS:
            return{
                ...state,
                projects:action.payload
            }
            case GET_PROJECT:
                return{
                    ...state,
                    project:action.payload
                }
                case GET_SERVICE:
                    return{
                        ...state,
                        project:action.payload
                    }
                case DELETE_PROJECT:
                    return{
                        ...state,
                        projects:state.projects.filter(
                            project=>project.serviceId!==action.payload
                        )
                    };    
            default:
                return state;

    }
} 