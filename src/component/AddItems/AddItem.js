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
      des: '',
      price: '',
      img:[]
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    let id = e.target.elements.id.value;
    let Title = e.target.elements.title.value;
    let Des = e.target.elements.des.value;
    let Price = e.target.elements.price.value;
    // let img = e.target.elements.file.files[0];
    let img = e.target.elements.file;
    console.log(e.target.elements.file);

    // let id = this.state.id;
    // let Title = this.state.title;
    // let Des = this.state.des;
    // let Price = this.state.price;
    // let img = this.state.img;

    
    
    // if(Title == 0 && Des == 0 && Price == 0){
    //     alert("PLZ Fill Out All Field");
    // }
    // else{
    let task = {
        id: id,
        title: Title,
        des: Des,
        price:Price,
        img: img
    }
    // this.setState(this.props.CartAction(task))
    this.props.CartAction(task);
    this.props.history.push('/AddItem');
    }    
// }

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
          <form 
          // action="http://localhost:8080/todo/save"
          method="POST" enctype="multipart/form-data"
          onSubmit={this.onSubmit} 
          >
            <div className="form-group">
              <input type="number" className="form-control" id="" aria-describedby="emailHelp" placeholder="ITEM ID"
                name="id" min="1" />
            </div>
            <div class="form-group">
              <input type="text" className="form-control" id="" placeholder="ITEM NAME" name="title" />
            </div>
            <div class="form-group">
              <input type="text" className="form-control" id="" placeholder="ITEM DESCRIPTION" name="des" />
            </div>
            <div className="form-group">
              <input type="number" className="form-control" id="" aria-describedby="emailHelp" placeholder="ITEM PRICE"
              name="price" min="1"/>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">ITEM IMAGE</span>
              </div>
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="inputGroupFile01" name="img" />
                <label class="custom-file-label" for="inputGroupFile01"></label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary" 
            // onClick={this.onSubmit} 
            >Submit</button>
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
