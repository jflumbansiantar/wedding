import React, { Component } from 'react';
import './home.module.css';
// import wedList from '../wedding/wedList';
// import { Link } from 'react-router-dom';
import wedding from '../../image/wed.png';

class Home extends Component {
  render() {
    return (
      <div className="dashboard container">
        <h1>Wedding Seat Organizer</h1>
        <h3>Let’s create for seat arrangement for a beautiful wedding</h3>
        
        <div className="card">
          <button>Input Wedding Title</button>
        </div>

        <img src={wedding} alt="wedding" />
        
      </div>
    )
  }
}

export default Home