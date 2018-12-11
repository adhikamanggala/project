import React, { Component } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Homepage from './components/Homepage';
import Register from './components/Register';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        
        <div>
          <Route exact path="/" component={Homepage}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </div>  
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { cookie: state.auth.cookie }
}

export default withRouter(connect(mapStateToProps)(App));
