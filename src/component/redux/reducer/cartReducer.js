import image1 from '../../Images/coa-cola-1.jpeg'

// import { saveAction } from '../action/cartAction';
import {myCart, OrderNow} from '../action/cartAction';
import { RESET } from '../action/cartAction';
import {DeleteAction} from '../action/cartAction';

const initState = {
    items: [
        // {
        // id:new Date(),
        // title:'Nestle Juice',
        // desc: "6 Pack of 100ml",
        // price: 780,
        // img:image1
        // },
    ],
    MyCart:[],
    total: 0
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
                        // addedItems: preve,
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

                case 'OrderNow':
                    return{
                        ...state,
                        order : action.data

                    }

                // case 'itemDelete':
                //     let allItem = state.items;
                //     return{
                //         ...state,
                //     }
            
        default:
            return state;
    }
}
