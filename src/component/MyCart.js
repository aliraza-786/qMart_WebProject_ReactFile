import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './header';
import { DeleteItem, myCart } from './redux/action/cartAction';
import './Task.css';
import { orderNow } from './redux/action/cartAction';
import Footer from './Footer';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

class MyCart extends Component {

  MyCart = this.props.MyCart;

  //Delete Data From MyCart
  deleteBtnClicked = (id) => {

    this.props.DeleteItem(id);
    alert('Deleted!' + id);
  }

  //Calculate Total Bill 
  totalBill = (MyCart) => {
    console.log(MyCart);
    
    let price = MyCart.ItemPrice;
    console.log(price);
    
    let cart = [price];
    // cart = [price];
    console.log("cart", cart);
  }

  
  order = (MyCart) => {

    if (MyCart == "") {
      alert("Your Cart Is Empty");
    }
    else {
      this.props.orderNow(MyCart);
      console.log("OrderNow in MyCart", MyCart);
    }
  }


  render() {

    let MyCart = this.props.MyCart;
    console.log("Render Consol of MyCart:", MyCart);

    return (
      <div style={{ backgroundColor: 'aliceblue',}}>
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
                  <b> Item Name : {MyCart.ItemName} <br /> {MyCart.ItemDes}
                    <br />Price : {MyCart.ItemPrice}</b>

                  <button type="button" className="close" aria-label="Close" id="crossbtn"
                    onClick={() => this.deleteBtnClicked(
                      MyCart.id
                    )}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>

                  {/* <button onClick={() => this.totalBill(MyCart.ItemPrice)}>Total Bill</button> */}

                  {/* Es button say data mongodb main store hota he  */}
                  {/* <button onClick={() => this.order(MyCart)}>Confirm...OrderNow</button> */}

                </div>
                //  </Box>
                //  </Grid>
              )
            })
            :
            <div>
              <h6>Nothing Was Found In Cart</h6>
              <h1>Cart Is Empty</h1>
            </div>
          }
        <button onClick={() => this.totalBill(MyCart)}>Total Bill</button><p></p>
        </div>


        <button 
        // onClick={() => this.order(MyCart)}
        >Confirm...</button>

        <div style={{marginTop: 450,}}>
        <Footer/>
        </div>
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

export default withRouter(connect(mapStateToProps, { DeleteItem, orderNow })(MyCart));
