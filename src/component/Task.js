import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import './Task.css';
import {MyCart} from './redux/action/cartAction';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from 'react-bootstrap/Button';

import { toast } from 'react-toastify';



class Task extends Component {
    // task = this.props;
    //  items = this.props;

    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            ItemName: '',
            ItemPrice: '',
        };
      }

      addToCart = () =>{
        let id = this.props.item.id;
        let ItemName = this.props.item.Title;
        let ItemPrice = this.props.item.Price;
        let ItemDes = this.props.item.Des;
        // let img = this.props.item.img;


        let mycart = {
            id: id,
            ItemName : ItemName,
            ItemPrice : ItemPrice,
            ItemDes : ItemDes
            // img : img
        }
        alert("Item Added")
        this.props.MyCart(mycart);
        this.props.history.push('/');
      }
      
    render() {
        let items = this.props.item;
        let path = items.img.slice(6);
        console.log("<=======Path====>", path);
        

        return (
            <div className="col-xl-3 col-md-4 col-sm-6 col-xs-12" id="check1">
                <Grid container>
                    <Box
                        boxShadow={3}
                        bgcolor="background.paper"
                        m={1}
                        p={1}
                        style={{ width: '36rem', height: '19rem' }}>
                        <p></p>
                        <h6 id="h5"><b>{items.Title}</b></h6>
                        <p id="">{items.Des}</p>
                        <p id="">Price : {items.Price}</p>
                        <img id="divimg" src={'http://localhost:8080/' + path} alt="Error" />
                        <Button variant="primary" onClick={this.addToCart} id="addToCartBtn">Add To Cart</Button>
                    </Box>
                </Grid>
            </div>
        )
    }
}

// function mapStateToProps(store) {
//     console.log("Store",store);

//     return {
//         items: store.cartReducer.items
//     }
// }

    // export default connect(mapStateToProps, null)(Task) ;
export default withRouter( connect(null,{MyCart})(Task) );
