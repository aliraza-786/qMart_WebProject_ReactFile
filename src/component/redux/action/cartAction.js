import React from 'react';
import axios from "axios";
export const RESET = 'RESET'
export const DeleteAction = 'DELETE';
export const OrderNow = 'ORDER';

// export const saveAction = 'SAVE';
export const myCart = 'SAVE';

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

        let url = 'http://localhost:8080/todo/save';
        axios.post(url)
            .then( res => {
                console.log("========DATA AT SAVEACTION======", res.task);
                
                dispatch({
                    type: 'saveAction',
                    data: res.task
                })
            } )
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

export function DeleteItem(ProductName) {
    //Delete Btn ki waja say sirf Error he baki thekh he
    console.log('In Action Delete: ', ProductName)
    return {
        type: DeleteAction,
        data: ProductName 
    }
}

//Save MyCart Into MongoDB;

export function orderNow(order){
    console.log('In Action OrderNow', order);

    return dispatch => {

        let url = 'http://localhost:8080/todo/carts';
        axios.post(url, order)
            .then( res => {
                console.log("========DATA AT SAVEACTION======", order);
                
                dispatch({
                    type: OrderNow,
                    data: res.order
                })
            } )
            alert("Item Added Into DB Cart", order);
    }
};
