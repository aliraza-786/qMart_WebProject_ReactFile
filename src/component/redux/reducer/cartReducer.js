import image1 from '../../Images/coa-cola-1.jpeg'
import image2 from '../../Images/pepsi-1.jpeg';
import image3 from '../../Images/sprite-1.jpg';
import image4 from '../../Images/fruitien.jpg';
import image5 from '../../Images/nestle-water-1.jpg';
import image6 from '../../Images/nestle-juice.jpg';

import { saveAction } from '../action/cartAction';
import {myCart} from '../action/cartAction';
import { RESET } from '../action/cartAction';
import {DeleteAction} from '../action/cartAction';

const initState = {
    items: [
        {
        id:new Date(),
        title:'Nestle Juice',
        desc: "6 Pack of 100ml",
        price: 780,
        img:image6
        },
        {id:new Date(),title:'Coca Cola ', desc: "6 Pack of 1.5ml",price:510,img: image1},
        {id:new Date(),title:'Pepsi Cola', desc: "6 Pack of 1.5ml", price:490,img: image2},
        {id:new Date(),title:'Sprite', desc: "6 Pack of 1.5ml ",price:510,img: image3},
        {id:new Date(),title:'Fruitien', desc: "6 Pack of 1.5ml", price:550,img:image4},
        {id:new Date(),title:'Nestle Purelife', desc: "6 Pack of 1.5ml", price:240,img: image5},
    ],
    MyCart:[],
    total: 0
}

export default function cartReducer(state = initState, action) {
    
    switch (action.type) {
        
        case 'saveAction':
        console.log('In Reducer SaveAction: ', state);
        let prev = state.items;
        prev.push(action.data);
            return {
                ...state,
                tasks: prev
            }
        
            case myCart:
            console.log('In Reducer MyCart: ', state);
            let preve = state.MyCart;
            preve.push(action.data);
                return {
                    ...state,
                    addedItems: preve,
                }

                case DeleteAction:
                {
                    // console.log('In Reducer DeleteAction: ', state.MyCart);
                    let mItems = state.MyCart;
                    console.log('This is mItems:', mItems);
                    // var a = action.data;
                    return { 
                        ...state,
                        MyCart: mItems.filter( (item) => item.ItemName !== action.data )
                    }
                }
            
        default:
            return state;
    }
}
