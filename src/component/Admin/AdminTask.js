import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import '../Task.css';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

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
        let path = items.img.slice(6);
        console.log("<=======Path====>", path);

        return (
            <div className="col-xl-3 col-md-4 col-sm-6 col-xs-6" id="check1">
                <Grid container>
                    <Box
                        boxShadow={3}
                        bgcolor="background.paper"
                        m={1}
                        p={1}
                        style={{ width: '36rem', height: '21rem' }}>
                <p>Item ID : {items.id}</p>
                <h5 id="h5"><b>{items.Title}</b></h5>
                <p id="">{items.Des}</p>
                <p id="">Price : {items.Price}</p>
                {/* <img id="divimg" src={items.img} alt="Error" /> */}
                <img id="divimg" src={'http://localhost:8080/' + path} alt="Error" />
                <button type="button" className="close" aria-label="Close" id="crossbtn"
                onClick={() => this.delete(items)}>
                <span aria-hidden="true">&times;</span>
                  </button>
                </Box>
                </Grid>
            </div>
        )
    }
}

export default withRouter( connect(null,{ItemDelete})(AdminTask) );
