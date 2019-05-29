import { getAllData, GETALLDATA } from '../action/simpleAction';


const initState = {
    items: [],
    carts: []
}

export default function getAllDataReducer(state = initState, action) {
    
    switch (action.type) {
        
        case GETALLDATA: 
        {
            return  {
                ...state,
                items: action.data
            }
        }

        default:
            return state;
    }
}