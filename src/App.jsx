import React from 'react';
import logo from './logo.svg';
import './App.css';

//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-sm-12">
            <h1>Pomodoro Clock</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-6 col-sm-6">
            <h2 id="break-label">Break Length</h2>
            <button id="break-increment" className="btn btn-link"><i class="fa fa-arrow-up"></i></button>
            <span>5</span>
            <button id="break-decrement" className="btn btn-link"><i class="fa fa-arrow-down"></i></button>
          </div>
          <div className="col-6 col-md-6 col-sm-6">
            <h2 id="session-label">Session Length</h2>
            <button id="session-increment" className="btn btn-light"><i class="fa fa-arrow-up"></i></button>
            <span>5</span>
            <button id="session-decrement" className="btn btn-light"><i class="fa fa-arrow-down"></i></button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12 col-sm-12">
          <div className="row">
          <h1>Session</h1>
          </div>
          <div className="row">
          <h1>25 : 00</h1>
          </div>
          </div>
        </div>
    </div>
  );
}

export default App;
