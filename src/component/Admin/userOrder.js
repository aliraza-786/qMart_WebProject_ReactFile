import React, { Component } from 'react';
import Header from './aHeader.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Footer from '../Footer';
import { getUserOrder } from '../redux/action/simpleAction';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import orderdelete from '../redux/action/cartAction';

class UserOrder extends Component {

    componentWillMount() {
        this.props.getUserOrder();
    }

    constructor(props) {
        super(props);
        this.state = {
            price: 0,
        }
    }


    // orderDone=()=>{
    //     let orderId = document.getElementById('orderId');
    //     orderId.style.backgroundColor = 'green';
    // }
    deleteOrder = (phoneNumber)=>{
        this.props.orderdelete(phoneNumber);
        alert("" + phoneNumber);

    }
    render() {
        let userOrder = this.props.userOrder;
        console.log("user order console", userOrder);
        return (
            <div>
                <Header />
                <div>
                    {userOrder.length > 0 ?
                        userOrder.map(order => {
                            return (

                                <div>
                                <Grid container>
                                    <Box
                                        boxShadow={3}
                                        bgcolor="background.paper"
                                        m={1}
                                        p={1}
                                        style={{ width: '100rem', height: 'rem' }}>
                                <div style={{ backgroundColor: 'lightblue', margin: '10', padding:10 }} id="orderId">
                                    <p></p>
                                    <p>Customer Name : {order.name}</p>
                                    <p>Customer Phone Number : {order.phoneNumber}</p>
                                    <p>Customer Address : {order.address}</p>
                                    <p style={{backgroundColor: 'lightgray'}}>Cutomer Order Time {order.createdAt}</p>
                                    <p style={{ backgroundColor: 'lightgray', padding:10 }}>
                                       <b><i>Customer Products : </i></b>{order.MyCart.map(cart => {
                                            return (
                                                <div style={{margin:10}}>
                                                    <p><o>{cart.ItemName} </o> {":"} <b >{cart.ItemDes}</b></p>
                                                    <p> </p>
                                                </div>
                                            )
                                        })
                                        }
                                        {/* <Button variant="outlined" color="primary"
                                            onClick={() => this.totalBill()}>Total Bill</Button><p></p> */}
                                    </p>
                                    <div style={{padding:8}}>
                                    {/* <Button variant="outlined" color="secondary" onClick={() => this.orderDone()}>Order Done</Button> */}
                                    <Button onClick={() => this.deleteOrder(order)} variant="outlined" color="secondary">ORDER DONE...!! Delete Now</Button>
                                    </div>
                                    <p></p>
                                </div>
                                    </Box></Grid>
                                </div>
                                )
                        })
                        :
                        <div>Loading....</div>
                    }
                </div>
                {/* <Footer /> */}
            </div>
        )
    }
}

function mapStatetoProps(store) {

    return {
        userOrder: store.getAllDataReducer.userOrder
    }
}

export default withRouter(connect(mapStatetoProps, { getUserOrder, orderdelete })(UserOrder));
