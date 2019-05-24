import React, { Component } from 'react'
import Header from './header';
import { connect } from 'react-redux';
// import Action from './redux/action/cartAction';
import {CartAction} from './redux/action/cartAction';
import Task from './Task';


class AddItems extends Component {

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
        <Header/>
        <div className="form-group">
          <form onSubmit={this.onSubmit}>
            <input type="text" ref="id" name="title" className="group-contol" placeholder="Enter Item Title" /><br/>
            <input type="text" ref="name" name="desc" className="group-contol" placeholder="Enter Item Description"/><br />
            <input type="number" ref="price" name="price" className="group-contol" placeholder="Enter Item Price"/><br />
            <input type="file" ref="file" className="group-contol" name="file"/><br/>

            <button>Add Post</button>
          </form>
        </div>
        </div>
    )
  }
}

// function mapStatetoProps(store) {
//     console.log("This is Home.js Console:", store);
//     return {
//       items: store.items
//     }
//   }
  
  export default connect(null, {CartAction} )(AddItems);
