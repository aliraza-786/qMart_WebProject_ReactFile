import Axios from "axios";

export const GETALLDATA = 'DETALLDATA';

export function getAllData(){
    console.log('In Action getAllData');
    
    return dispatch => {

        let url = 'http://localhost:8080/todo/getAllData';
        Axios.get(url)
            .then( res => {
                console.log("========DATA AT ACTION======", res.data);
                
                dispatch({
                    type: GETALLDATA,
                    data: res.data
                })

            } )

    }
};