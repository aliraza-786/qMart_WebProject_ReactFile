import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import '../Task.css';
// import {MyCart} from './redux/action/cartAction';

import {ItemDelete} from '../redux/action/cartAction';

import { toast } from 'react-toastify';
import { Input } from '@material-ui/core';



class AdminTask extends Component {

   delete = (id) => {
       this.props.ItemDelete(id);
       alert("ID : " + id);
   }
    
      
    render() {
        let items = this.props.item;
        return (
            <div className="col-xl-3 col-md-4 col-sm-6 col-xs-6" id="check1">
                <p>Item ID : {items.id}</p>
                <h5 id="h5"><b>{items.Title}</b></h5>
                <p id="">{items.Des}</p>
                <p id="">Price : {items.Price}</p>
                <img id="divimg" src={items.img} alt="Error" />
                {/* <button type="button" id="addToCartBtn" className="btn btn-outline-primary" >
                Delete Item</button> */}
                <button type="button" class="close" aria-label="Close" id="crossbtn"
                onClick={() => this.delete(items.id)}   
                >
                    <span aria-hidden="true">&times;</span>
                  </button>
            </div>
        )
    }
}

export default withRouter( connect(null,{ItemDelete})(AdminTask) );
