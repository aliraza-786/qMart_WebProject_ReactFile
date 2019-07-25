import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './header';
import './Task.css';
import { DeleteItem, myCart } from './redux/action/cartAction';
import { orderNow } from './redux/action/cartAction';
import Footer from './Footer';
import Userinfo from './User/userInfo';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// import {ToastsContainer, ToastsStore} from 'react-toasts';
import { toast } from 'react-toastify';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

class MyCart extends Component {

  MyCart = this.props.MyCart;
  
  constructor(props){
    super(props);
    this.state = {
      price: 0,
      open: false,
      name: '',
      phoneNumber: '',
      address: '',
      totalBill:'',
    }
  }
  // render = () => {
  //   return <div>
  //     <button onClick={() => ToastsStore.success("Hey, you just clicked!")}>Click me</button>
  //     <ToastsContainer store={ToastsStore} />
  //   </div>
  // }


    //Delete Data From MyCart
  deleteBtnClicked = (id) => {
  
    this.props.DeleteItem(id);
    alert('Deleted!' + id);
    // toast.success("Success Notification !", {
    //   position: toast.POSITION.TOP_CENTER
    // });
  }

  //Calculate Total Bill 
  totalBill = (cart) => {
    if(cart.length > 0) {
      var totalbill = 0;
      cart.map( c => {
        totalbill = totalbill + c.ItemPrice;
      })

      this.setState({
        price: totalbill
      })
    } else {
      toast.error('No item selected!')
    }
  }

  order = (cart) => {
    this.setState({
      open: !this.state.open
    })
  }

  handleModal = () => {
    this.setState( (prevState) => {
      return {
        open: !prevState.open
      }
    })
  };

  handleChange = name => event => {
    this.setState({ [name] : event.target.value });
  };

  onFormSubmitted = () => {
    let cart = this.props.MyCart;
    let { name, phoneNumber, address } = this.state;
    if (cart.length === 0) {
      alert("Your Cart Is Empty");
    }
    else {
      if(name === "" || phoneNumber === "" || address === "") {
        alert('All fileds are required!')
      } else {
        this.setState({ open: false })
        let obj = {
          name,
          phoneNumber,
          address,
          cart,
 
        }
        console.log("Final Cart:", obj)
        this.props.orderNow(obj);
      }
    }
  }

  render() {

    let MyCart = this.props.MyCart;
    let price = 0;
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

          
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleModal}
          >
            <div style={{ width: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Card style={{padding: '30px',}}>
                <Typography variant="h6" id="modal-title">
                  Please provide information for delivery!
                </Typography>
                <Typography variant="subtitle1" id="simple-modal-description">
                  Enter Your Name:
                </Typography>
                <TextField
                  id="filled-name"
                  label="Name"
                  value={this.state.name}
                  onChange={this.handleChange('name')}
                  margin="normal"
                />
                <Typography variant="subtitle1" id="simple-modal-description">
                  Enter Your Phone Number:
                </Typography>
                <TextField
                  type="number"
                  id="filled-name"
                  label="Phone Number"
                  value={this.state.phoneNumber}
                  onChange={this.handleChange('phoneNumber')}
                  margin="normal"
                />
                <Typography variant="subtitle1" id="simple-modal-description">
                  Enter Your Address:
                </Typography>
                <TextField
                  id="standard-full-width"
                  label="Address"
                  value={this.state.address}
                  onChange={this.handleChange('address')}
                  margin="normal"
                />

                <Button onClick={this.onFormSubmitted} variant="contained" color="primary" style={{marginTop: '80px'}}>
                  Submit
                </Button>
              </Card>
            </div>
          </Modal>

        <Button variant="outlined" color="primary" onClick={() => this.totalBill(MyCart)}>Total Bill</Button><p></p>

        </div>

        <Button variant="outlined" color="secondary" onClick={() => this.order(MyCart)}>Confirm...</Button>

        { this.state.price === 0 ? <div></div> : <h1>Your bill is: {this.state.price} Rs</h1> } 

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
