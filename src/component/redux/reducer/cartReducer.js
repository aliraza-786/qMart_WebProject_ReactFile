import image1 from '../../Images/coa-cola-1.jpeg'

// import { saveAction } from '../action/cartAction';
import {myCart} from '../action/cartAction';
import {DeleteAction} from '../action/cartAction';
import {order} from '../action/cartAction';

const initState = {
    items: [],
    MyCart:[],
    orderNow:[],
}

export default function cartReducer(state = initState, action) {
    
    switch (action.type) {
        
        // case 'saveAction':
        // console.log('In Reducer SaveAction: ', state);
        // let prev = state.items;
        // prev.push(action.data);
        //     return {
        //         ...state,
        //         tasks: prev
        //     }
        case 'saveAction':
            console.log('In Reducer SaveAction: ', state);
                return {
                    ...state,
                    items: action.data
                }
        
            case myCart:{
                console.log('In Reducer MyCart: ', state);
                let preve = state.MyCart;
                preve.push(action.data);
                    return {
                        ...state,
                        MyCart: preve,
                    }
                }

                case DeleteAction:
                {
                    // console.log('In Reducer DeleteAction: ', state.MyCart);
                    let mItems = state.MyCart;
                    console.log('This is mItems:', mItems);
                    return { 
                        ...state,
                        // MyCart: mItems.filter( (item) => item.ItemName !== action.data )
                        MyCart: mItems.filter( (item) => item.id !== action.data )
                    }
                }

                case order:
                {
                    console.log("OrderNow In Reducer", state );
                    // let pre = state.orderNow;
                    // pre.push(action.data);
                    return {
                        ...state,
                        orderNow: action.data,
                        // order: pre,
                        
                    }
                }
                
                case 'itemDelete':
                    return {
                        ...state,
                        itemDelete: action.data
                    }

                case 'DELETEORDER':
                    return {
                        ...state,
                        DELETEORDER: action.data
                    }

        default:
            return state;
    }
}
