import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as R , Route , Link} from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './component/redux/store/store';
import { createStore } from 'redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import Header from './component/header';
import AddItems from './component/AddItems';
import MyCart from './component/MyCart';
import Footer from './component/Footer';
// import LogInForm from './component/LogInForm';
import LogInForm from './component/LogIn Form/LogInForm';
import AddItem from './component/AddItems/AddItem';
import userInfo from './component/User/userInfo';

import { getAllData } from './component/redux/action/simpleAction';
import { connect } from 'react-redux';

import AdminHome from './component/Admin/AdminHome';



class App extends Component {

  render() {
  return (
    <div className="App">
      <Provider store={store}>
        <R>
          <div>
            <Route exact path='/' component={Home}/>
            <Route path='/AddItems' component={AddItems}/>
            <Route path='/MyCart' component={MyCart}/>
            <Route path='/Footer' component={Footer}/>
            <Route path='/LogInForm' component={LogInForm}/>
            <Route path='/AddItem' component={AddItem}/>
            <Route path='/userInfo' component={userInfo}/>
            <Route path='/AdminHome' component={AdminHome}/>
          </div>
        </R>
      </Provider>
    </div>
  );
}
}
export default App;
