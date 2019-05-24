import React, { Component } from 'react';
import Header from './header';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import Action from './redux/action/cartAction';
import { CartAction } from './redux/action/cartAction';
import Task from './Task';
import Footer from './Footer';
import {Slideshow} from './Slider';
import { getAllData } from './redux/action/simpleAction';

class Home extends Component {


  componentWillMount() {
    this.props.getAllData();
  }

  render() {
    let items = this.props.items;
    console.log("This is Home.js console", items);

    return (
      <div>
        <Header/>
        <Slideshow/>
        <div  className="container">
          <div  className="row">
        {items.length > 0 ?
          items.map(items => {
            return (
              <Task item={items}
              />
            )
          })
          :
          <div>No Task Found!</div>
        }
        </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

function mapStatetoProps(store) {
  console.log("This is Home.js Console:", store);
  return {
    // items: store.cartReducer.items
    items: store.getAllDataReducer.items
  }
}

export default withRouter (connect(mapStatetoProps, {getAllData})(Home));
