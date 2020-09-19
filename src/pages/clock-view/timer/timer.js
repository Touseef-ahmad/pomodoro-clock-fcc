import React from 'react';
import { propTypes } from './prop-types';
import './styles.css';

class Timer extends React.Component {
  state = {
    minutes: this.props.sessionLength,
    seconds: 0,
    timerType: 'Session',
  };

  // stop timer and reset to 25:00
  componentWillReceiveProps(newProps) {
    clearInterval(this.tickTockInterval);
    this.tickTockInterval = null;
    this.setState({
      minutes: newProps.sessionLength,
      seconds: 0,
      timerType: 'Session',
    });
  }

  changeTimer = () => {
    const { timerType } = this.state;
    const { breakLength, sessionLength } = this.props;

    if (timerType === 'Session') {
      this.setState({
        minutes: breakLength,
        seconds: 0,
        timerType: 'Break',
      });
    } else {
      this.setState({
        minutes: sessionLength,
        seconds: 0,
        timerType: 'Session',
      });
    }
    // this.props.audioBeep.play();
  };

  startStop = () => {
    if (!this.tickTockInterval) {
      this.tickTockInterval = setInterval(this.tickTock, 1000);
    } else {
      clearInterval(this.tickTockInterval);
      this.tickTockInterval = null;
    }
  };

  tickTock = () => {
    const { seconds, minutes } = this.state;

    if (seconds > 0) {
      this.setState({ seconds: seconds - 1 });
    }
    if (seconds === 0) {
      if (minutes === 0) {
        this.changeTimer();
      } else {
        this.setState({
          minutes: minutes - 1,
          seconds: 59,
        });
      }
    }
  };

  render() {
    const { seconds, minutes, timerType } = this.state;
    const { reset } = this.props;

    return (
      <div className='shadow box'>
        <h1 id='timer-label'>{timerType}</h1>
        <h1 id='time-left'>
          {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1>
        <button type='button' id='start_stop' onClick={this.startStop} className='btn btn-link'>
          <i className='fa fa-play' />
          <i className='fa fa-pause' />
        </button>
        <button type='button' id='reset' onClick={reset} className='btn btn-link'>
          <i className='fa fa-refresh' />
        </button>
      </div>
    );
  }
}

Timer.propTypes = propTypes;

export { Timer };
