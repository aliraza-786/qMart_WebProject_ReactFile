import { getAllData, GETALLDATA , GETUSERORDER } from '../action/simpleAction';


const initState = {
    items: [],
    carts: [],
    userOrder:[]
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

        case GETUSERORDER: 
        
        {
            return  {
                ...state,
                userOrder: action.data
            }
        }

        default:
            return state;
    }
}