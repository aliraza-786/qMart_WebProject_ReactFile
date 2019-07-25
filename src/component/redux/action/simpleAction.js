import Axios from "axios";
import EndPoint from '../../../EndPoint/EndPoint';

export const GETALLDATA = 'DETALLDATA';
export const GETUSERORDER = 'USERORDER';

export function getAllData(){
    console.log('In Action getAllData');
    
    return dispatch => {

        let url = EndPoint + '/todo/getAllData';
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

export function getUserOrder(){
    console.log('In Action getUserOrder');
    
    return dispatch => {

        let url = EndPoint + '/todo/getUserOrder';
        Axios.get(url)
            .then( res => {
                console.log("========DATA AT ACTION======", res.data);
                
                dispatch({
                    type: GETUSERORDER,
                    data: res.data
                })

            } )

    }
};