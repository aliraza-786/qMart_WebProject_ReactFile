import React from 'react';
export const RESET = 'RESET'
export const DeleteAction = 'DELETE';

// export const saveAction = 'SAVE';
export const myCart = 'SAVE';

export function CartAction(task){
    return{
        type: 'saveAction',
        data: task
    }
};

export function MyCart(mycart){
    console.log('In Action mycart:', mycart);
    
    return{
        type: myCart,
        data: mycart
    }
};

export function DeleteItem(ProductName) {
    //Delete Btn ki waja say sirf Error he baki thekh he
    console.log('In Action Delete: ', ProductName)
    return {
        type: DeleteAction,
        data: ProductName 
    }
}
