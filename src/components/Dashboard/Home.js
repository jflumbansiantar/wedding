import React from 'react';
import './Home.module.css';
import hello from '../../Image/hello.png';

function Dashboard() {
    return (
      <div className="dashboard">
        <p> Hello, This is WEDDING SEAT ORGANIZER </p>
        <div className="container">
          This is start
           <div className="card">
            Hellog
             
           </div>
          <div className="container">
          This is start
           <div className="card">
              Hellog
           </div>
            <img src={hello} />
          </div>
        </div>
      </div>
    )
  }

export default Dashboard;