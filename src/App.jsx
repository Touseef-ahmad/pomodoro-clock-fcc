import React from 'react';
import './App.css';

//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      totalMinutes: 1,
      remainingMinutes: 1,
      remainingSeconds: 0,
      breakLength: 1,
      session: "Session",
    };
    this.decrementBreakLength = this.decrementBreakLength.bind(this)
    this.incrementBreakLength = this.incrementBreakLength.bind(this)
    this.decrementSessionLength = this.decrementSessionLength.bind(this)
    this.incrementSessionLength = this.incrementSessionLength.bind(this)
    this.reset = this.reset.bind(this)
    this.tickTock = this.tickTock.bind(this)
    this.startStop = this.startStop.bind(this)
    this.changeSession = this.changeSession.bind(this)
  }
  changeSession(){
    const session = this.state.session;
    if(session === "Session"){
      this.setState(state=>({
        remainingMinutes: state.breakLength,
        remainingSeconds: 0,
        session: "Break",
      }))
      
    }else{
      this.setState(state=>({
        remainingMinutes: state.totalMinutes,
        remainingSeconds: 0,
        session: "Session",
      }))
    }
    this.audioBeep.play();
  }
  tickTock(){
            const { remainingSeconds, remainingMinutes } = this.state

            if (remainingSeconds > 0) {
                this.setState(({ remainingSeconds }) => ({
                    remainingSeconds: remainingSeconds - 1
                }))
            }
            if (remainingSeconds === 0) {
                if (remainingMinutes === 0) {
                    this.changeSession()
                } else {
                    this.setState(({ remainingMinutes }) => ({
                        remainingMinutes: remainingMinutes - 1,
                        remainingSeconds: 59
                    }))
                }
            } 
        }
  decrementBreakLength(){
    const breakLength = this.state.breakLength;
    if(breakLength !== 1){
      this.setState(state => ({
        breakLength : state.breakLength - 1
      }))
    }
  }
  incrementBreakLength(){
    const breakLength = this.state.breakLength;
    if(breakLength !== 60){
      this.setState(state => ({
        breakLength : state.breakLength + 1
      }))
    }
  }
  decrementSessionLength(){
    const totalMinutes = this.state.totalMinutes;
    if(totalMinutes !== 1){
      this.setState(state => ({
        totalMinutes : state.totalMinutes - 1,
        remainingMinutes: state.totalMinutes - 1,
        remainingSeconds: 0
        
      }))
    }
  }
  reset(){
    clearInterval(this.tickTockInterval)
    this.setState({  
      totalMinutes: 25,
      remainingMinutes: 25,
      remainingSeconds: 0,
      breakLength: 5,
      session: "Session"
      })
    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;

  }
  startStop(){
    if (!this.tickTockInterval) {
        this.tickTockInterval = setInterval(this.tickTock,1000);
    } else {
        clearInterval(this.tickTockInterval);
        this.tickTockInterval = null;
    }
  }
  incrementSessionLength(){
    const totalMinutes = this.state.totalMinutes;
    if(totalMinutes !== 60){
      this.setState(state => ({
        totalMinutes : state.totalMinutes + 1,
          remainingMinutes: state.totalMinutes + 1,
          remainingSeconds: 0 
      }))
    }
  }
  render(){
    const seconds = this.state.remainingSeconds;
    const remainingMinutes = this.state.remainingMinutes;
    const totalMinutes = this.state.totalMinutes;
    const breakLength = this.state.breakLength;
    const session = this.state.session;
    return (
      <div className="container">
       <audio
          id="beep"
          preload="auto"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
          ref={(audio) => {
            this.audioBeep = audio;
          }}
        />
          <div className="row">
            <div className="col-12 col-md-12 col-sm-12">
              <h1>Pomodoro Clock</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-6 col-sm-6">
              <h2 id="break-label">Break Length</h2>
                <button id="break-increment" onClick={this.incrementBreakLength}                            className="btn btn-link">
                    <i class="fa fa-arrow-up"></i>
                </button>
              <span id="break-length">{breakLength}</span>
              <button id="break-decrement" onClick={this.decrementBreakLength}                              className="btn btn-link">
                    <i class="fa fa-arrow-down"></i>   
               </button>
            </div>
            <div className="col-6 col-md-6 col-sm-6">
              <h2 id="session-label">Session Length</h2>
              <button id="session-increment" onClick={this.incrementSessionLength} className="btn btn-link"><i class="fa fa-arrow-up"></i></button>
    <span id="session-length">{totalMinutes}</span>
              <button id="session-decrement" onClick={this.decrementSessionLength}  className="btn btn-link"><i class="fa fa-arrow-down"></i></button>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-sm-12">
            <div className="row">
            <h1 id="timer-label">{session}</h1>
            </div>
            <div className="row">
                <h1 id="time-left">{remainingMinutes<10?`0${remainingMinutes}`:remainingMinutes}:{seconds<10?`0${seconds}` : seconds}</h1>
            </div>
             <div className="row">
               <div>
                 <button id="start_stop" onClick={this.startStop} className="btn btn-link"><i class="fa fa-play"></i><i class="fa fa-pause"></i></button>
               </div>
               <div>
                 <button id="reset" onClick={this.reset} className="btn btn-link"><i class="fa fa-refresh"></i></button>
               </div>
             </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
