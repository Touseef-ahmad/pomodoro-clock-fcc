import React from 'react';
import { Timer } from './timer';
import { TimerLengthControl } from './timer-length-control';
// bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

class ClockView extends React.Component {
  state = {
    sessionLength: 25,
    breakLength: 5,
  };

  setBrkLength = length => {
    this.setState({ breakLength: length });
  };

  setSeshLength = length => {
    this.setState({ sessionLength: length });
  };

  reset = () => {
    this.setState({
      sessionLength: 25,
      breakLength: 5,
    });
    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
  };

  render() {
    const { sessionLength, breakLength } = this.state;

    return (
      <div className='container text-center'>
        <audio
          id='beep'
          preload='auto'
          src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
          ref={audio => {
            this.audioBeep = audio;
          }}
        />
        <div className='row'>
          <div className='col-10 col-md-6 col-sm-8 offset-1 offset-md-3 offset-sm-2'>
            <h1>Pomodoro Clock</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-6 col-md-6 col-sm-6'>
            <TimerLengthControl
              id='break'
              length={breakLength}
              title='Break Length'
              setLength={this.setBrkLength}
            />
          </div>
          <div className='col-6 col-md-6 col-sm-6'>
            <TimerLengthControl
              id='session'
              length={sessionLength}
              title='Session Length'
              setLength={this.setSeshLength}
            />
          </div>
        </div>
        <div className='row text-red'>
          <div className='col-10 col-md-6 col-sm-8 offset-1 offset-md-3 offset-sm-2'>
            <Timer
              sessionLength={sessionLength}
              audioBeep={this.audioBeep}
              breakLength={breakLength}
              reset={this.reset}
            />
          </div>
        </div>
      </div>
    );
  }
}

export { ClockView };
