import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
// import Navbar from './components/layout/navbar';
import Dashboard from './components/Dashboard/Home';
import  "./App.css"

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        
          <Dashboard />  
        
      </BrowserRouter>
    );
  }
}
