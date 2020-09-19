import React from 'react';
import './App.css';
import TimerLengthControl from './Components/timer-length-control.jsx';
import Timer from './Components/timer.jsx';
//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionLength: 25,
      breakLength: 5,
    };
    this.setBrkLength = this.setBrkLength.bind(this)
    this.setSeshLength = this.setSeshLength.bind(this)
    this.reset = this.reset.bind(this)
  }
  
  setBrkLength(length) {
    this.setState({ breakLength: length })
  }
  setSeshLength(length) {
    this.setState({ sessionLength: length })
  }

  reset() {
    this.setState({
      sessionLength: 25,
      breakLength: 5,
    })
    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
  }
  
  render() {
    const sessionLength = this.state.sessionLength;
    const breakLength = this.state.breakLength; 
    return (
      <div className="container text-center">
        <audio
          id="beep"
          preload="auto"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
          ref={(audio) => {
            this.audioBeep = audio;
          }}
        />
        <div className="row">
          <div className="col-10 col-md-6 col-sm-8 offset-1 offset-md-3 offset-sm-2">
            <h1>Pomodoro Clock</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-6 col-sm-6">
            <TimerLengthControl
              id="break" length={breakLength}
              title="Break Length" setLength={this.setBrkLength} />
          </div>
          <div className="col-6 col-md-6 col-sm-6">
            <TimerLengthControl
              id="session" length={sessionLength}
              title="Session Length" setLength={this.setSeshLength} />
          </div>
        </div>
        <div className="row text-red">
          <div className="col-10 col-md-6 col-sm-8 offset-1 offset-md-3 offset-sm-2">
              <Timer sessionLength={sessionLength} audioBeep={this.audioBeep}
              breakLength={breakLength} reset={this.reset}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
