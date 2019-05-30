import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './header';
import {DeleteItem, myCart} from './redux/action/cartAction';
import './Task.css';
import {orderNow} from './redux/action/cartAction';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

class MyCart extends Component {

MyCart = this.props.MyCart;


  deleteBtnClicked = (id) => {
 
      this.props.DeleteItem(id);
      alert('Deleted!' + id);
}

  totalBill = (ItemPrice) => {
    
  }

  order = (MyCart) => {

    if(MyCart == ""){
      alert("Your Cart Is Empty");
    }
    else{
    this.props.orderNow(MyCart);
    console.log("OrderNow in MyCart", MyCart);
    }
  }


  render() {
    
    let MyCart = this.props.MyCart;
    console.log("Render Consol of MyCart:", MyCart);

    return (
      <div>
        <Header />
        <div>
          
          {MyCart.length > 0 ?
            MyCart.map(MyCart => {
              let id = MyCart.id;

              return (
                // <Grid container>
                //   <Box
                //     boxShadow={3}
                //     bgcolor="background.paper"
                //     m={1}
                //     p={1}
                //     style={{ width: '100rem', height: '8rem' }}>
                  
                <div className="form-group" id="myCartDiv">
                  <b> Item Name : {MyCart.ItemName} <br/>Item Desciption : {MyCart.ItemDes}
                   <br/>Item Price : {MyCart.ItemPrice}</b>

                  <button type="button" class="close" aria-label="Close" id="crossbtn" 
                  onClick={() => this.deleteBtnClicked(
                    MyCart.id
                    )}
                  >
                  <span aria-hidden="true">&times;</span>
                  </button>

                  {/* <button onClick={() => this.totalBill(MyCart.ItemPrice)}>Total Bill</button> */}

                    {/* Es button say data mongodb main store hota he  */}
                  <button onClick={() => this.order(MyCart)}>Confirm...OrderNow</button>
                </div>
                // </Box>
                // </Grid>
              )
            })
            :
            <div>
              <h6>Nothing Was Found In Cart</h6>
              <h1>Cart Is Empty</h1>
            </div>
          }
        </div>

        <button onClick={() => this.totalBill(MyCart.ItemPrice)}>Total Bill</button><p></p>
        <button onClick={() => this.order(MyCart)}>Confirm...</button>

      </div>
    )
  }
}

function mapStateToProps(store) {
  console.log("mapStateToPropd In MyCart.js:", store);//store.MyCart

  return {
    MyCart: store.cartReducer.MyCart
  }
}

export default withRouter( connect(mapStateToProps, {DeleteItem, orderNow})(MyCart) );
