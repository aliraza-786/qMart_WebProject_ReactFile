import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import Header from '../header';
import Footer from '../Footer';
import {CartAction} from '../redux/action/cartAction';


class AddItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      desc: '',
      price: '',
      img:[]
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    let title = e.target.elements.title.value;
    let desc = e.target.elements.desc.value;
    let price = e.target.elements.price.value;
    let img = e.target.elements.file.files[0];
    console.log(e.target.elements.file.files[0]);
    
    
    if(title == 0 && desc == 0 && price == 0){
        alert("PLZ Fill Out All Field");
    }
    else{
    let task = {
        id: new Date(),
        title: title,
        desc: desc,
        price:price,
        img: img
    }
    this.props.CartAction(task);
    this.props.history.push('/');
    }    
}

  render() {
  return (
    <div>
      <Header />

      <Grid container>
        <Box
          boxShadow={3}
          bgcolor="background.paper"
          m={6}
          p={5}
          style={{ width: '80rem', height: '30rem' }}
        >
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input type="number" className="form-control" id="" aria-describedby="emailHelp" placeholder="ITEM ID"
                min="1" />
            </div>
            <div class="form-group">
              <input type="text" className="form-control" id="" placeholder="ITEM NAME" />
            </div>
            <div class="form-group">
              <input type="text" className="form-control" id="" placeholder="ITEM DESCRIPTION" />
            </div>
            <div className="form-group">
              <input type="number" className="form-control" id="" aria-describedby="emailHelp" placeholder="ITEM PRICE" />
            </div>
            {/* <div class="form-group">
              <label htmlFor="">Upload Image</label>
              <input type="file" className="form-control" id=""/>
        </div> */}
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">ITEM IMAGE</span>
              </div>
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="inputGroupFile01" />
                <label class="custom-file-label" for="inputGroupFile01">Upload Image</label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </Box>
      </Grid>

      <Footer/>
    </div>
  );
}
}
// export default AddItem;
export default connect(null, {CartAction} )(AddItem);
