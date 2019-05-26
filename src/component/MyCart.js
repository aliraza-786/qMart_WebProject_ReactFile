import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './header';
import {DeleteItem} from './redux/action/cartAction';
import './Task.css';

class MyCart extends Component {
MyCart = this.props.MyCart;

  deleteBtnClicked = (id) => {
        //Delete Btn ki waja say sirf Error he baki thekh he    
      // let ProductName = this.props.MyCart;
      // console.log("This is MyCart Component", ProductName);    
      this.props.DeleteItem(id);
      alert('Deleted!' + id);
}
  totalBill = (ItemPrice) => {
    let sum = 0;
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
              // let name = MyCart.ItemName;
              let name = MyCart.id;
              return (
                <div className="form-group" id="myCartDiv">
                  <b><o>Id : {MyCart.id} <br/> Product Name : {MyCart.ItemName} <br/>Product Price : {MyCart.ItemPrice}</o></b>
                  
                  <button type="button" class="close" aria-label="Close" id="crossbtn" 
                  onClick={() => this.deleteBtnClicked(
                    // MyCart.ItemName
                    MyCart.id
                    )}
                  >
                  <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              )
            })
            :
            <div>
              <h6>Nothing Was Found In Cart</h6>
              <h1>Cart Is Empty</h1>
            </div>
          }
        </div>
        {/* <button onClick={() => this.totalBill(MyCart.ItemPrice)}>Total Bill</button> */}
      </div>
    )
  }
}

function mapStateToProps(store) {
  console.log("mapStateToPropd In MyCart.js:", store);//store.MyCart

  return {
    MyCart: store.cartReducer.MyCart,
    // items: store.getAllDataReducer.items

  }
}

export default withRouter( connect(mapStateToProps, {DeleteItem})(MyCart) );
