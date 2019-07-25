import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import Header from '../Admin/aHeader';
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
      img:'',
    };
  }

  saveForm=(e)=>{
    this.setState({[e.target.name] : e.target.value});
  }
  image=(e)=>{
    this.setState({[e.target.name]: e.target.files[0]})
  }
  onSubmit = (e) => {
    e.preventDefault();

    let data = new FormData();
    data.append('id', this.state.id)
    data.append('title', this.state.title)
    data.append('des', this.state.des)
    data.append('price', this.state.price)
    data.append('img', this.state.img)

    this.props.CartAction(data);
    this.props.history.push('/AddItem');
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
          <form 
          method="POST" enctype="multipart/form-data" 
          onSubmit={this.onSubmit}
          >
            <div className="form-group">
              <input type="number" className="form-control" id="" aria-describedby="emailHelp" placeholder="ITEM ID"
                name="id" min="1" required 
                value={this.state.id}
                onChange={this.saveForm}  />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" id="" placeholder="ITEM NAME" name="title" required
              value={this.state.title}
              onChange={this.saveForm}/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" id="" placeholder="ITEM DESCRIPTION" name="des" required
              value={this.state.des}
              onChange={this.saveForm}/>
            </div>
            <div className="form-group">
              <input type="number" className="form-control" id="" aria-describedby="emailHelp" placeholder="ITEM PRICE"
              name="price" min="1" required 
              value={this.state.price}
              onChange={this.saveForm}/>  
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">ITEM IMAGE</span>
              </div>
              <div className="custom-file">
                <input type="file" className="custom-file-input" id="inputGroupFile01" name="img" required
                value={this.state.img.value}
                onChange={this.image}/>
                <label className="custom-file-label" for="inputGroupFile01">Upload Image</label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary" 
            // onSubmit={()=>this.onSubmit()}//========
            >Submit</button>
          </form>
        </Box>
      </Grid>

      <Footer/>
    </div>
  );
}
}
export default connect(null, {CartAction} )(AddItem);
