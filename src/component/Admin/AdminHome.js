import React, { Component } from 'react';
import Header from './aHeader.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CartAction } from '../redux/action/cartAction';
import AdminTask from './AdminTask';
import Footer from '../Footer';
import Slideshow from '../Slider';

// import { getAllData } from './redux/action/simpleAction';
import {getAllData} from '../redux/action/simpleAction';


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
        <div  className="container" style={{ backgroundColor: '', padding: 20,} }>
          <div  className="row">
        {items.length > 0 ?
          items.map(items => {
            return (
              <AdminTask item={items}/>
            )
          })
          :
          // <div>No Task Found!</div>
            <div>Loading....</div>
        }
        </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

function mapStatetoProps(store) {
  console.log("This is AdminHome.js Console:", store);
  return {
    // items: store.cartReducer.items
    items: store.getAllDataReducer.items
  }
}

export default withRouter (connect(mapStatetoProps, {getAllData})(Home));
