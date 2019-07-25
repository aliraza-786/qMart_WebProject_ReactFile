import React from 'react';
import axios from "axios";
import EndPoint from '../../../EndPoint/EndPoint';

export const RESET = 'RESET'
export const DeleteAction = 'DELETE';
export const order = 'ORDER';
export const itemDelete = 'ITEMDELETE';
export const myCart = 'SAVE';
export const DELETEORDER = 'DELETEORDER';


// export function CartAction(task){
//     return{
//         type: 'saveAction',
//         data: task
//     }
// };

    //Save Data Into MongoDB (Using AddItem Page)
export function CartAction(task){
    console.log('In Action save data', task);

    return dispatch => {


        let url = EndPoint + '/todo/save';
        axios.post(url, task)
            .then( res => {
                console.log("========DATA AT SAVEACTION======", task);                
                dispatch({
                    type: 'saveAction',
                    data: res.task
                })
            } )
            alert("Item Add")
    }
};

    //Item Add (Home Page) into MyCart (MyCart Page)
export function MyCart(mycart){
    console.log('In Action mycart:', mycart);
    
    return{
        type: myCart,
        data: mycart
    }
};  

    //Delete Selected Item
export function DeleteItem(ProductId) {
    
    console.log('In Action Delete: ', ProductId)
    return {
        type: DeleteAction,
        data: ProductId
    }
}

    //Save MyCart Into MongoDB;
export function orderNow(cart){
    console.log('In Action OrderNow', cart);

    return dispatch => {

        let url = EndPoint+ '/todo/carts';
        axios.post(url, cart)
            .then( res => {
                alert("Ordered confirmed!")
                
                dispatch({
                    type: order,
                    data: res.cart
                })

            })
            .catch( err => {
                alert("Error: " + err);
            })
    }
};


    //Delete Data from MongoDB
export function ItemDelete(id){
    console.log('In Action Delete Data From MongoDB', id);

    return dispatch => {
        let url = EndPoint + '/todo/itemDelete';
        axios.post(url,id)
            .then( res => {
                
                dispatch({
                    type: ItemDelete,
                    data: res.id,
                })
            } )
    }
};

    //Delete User Order from MongoDB
    export default function orderdelete(phonenumber){
        console.log('In Action Delete Data From MongoDB', phonenumber);
    
        return dispatch => {
            let url = EndPoint + '/todo/userOrderDelete';
            axios.post(url,phonenumber)
                .then( res => {
                    
                    dispatch({
                        type: DELETEORDER,
                        data: res.phonenumber,
                    })
                } )
        }
    };
