import React from 'react';
class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            minutes: this.props.sessionLength,
            seconds: 0,
            timerType: "Session",
        }
        this.startStop = this.startStop.bind(this);
        this.changeTimer = this.changeTimer.bind(this);
        this.tickTock = this.tickTock.bind(this)
    }
    tickTock() {
        const { seconds, minutes } = this.state
    
        if (seconds > 0) {
          this.setState(({ seconds }) => ({
            seconds: seconds - 1
          }))
        }
        if (seconds === 0) {
          if (minutes === 0) {
            this.changeTimer()
          } else {
            this.setState(({ minutes }) => ({
              minutes: minutes - 1,
              seconds: 59
            }))
          }
        }
      }
    startStop() {
        if (!this.tickTockInterval) {
          this.tickTockInterval = setInterval(this.tickTock, 1000);
        } else {
          clearInterval(this.tickTockInterval);
          this.tickTockInterval = null;
        }
      }
      
      changeTimer() {
        const timerType = this.state.timerType;
        if (timerType === "Session") {
          this.setState(state => ({
            minutes: this.props.breakLength,
            seconds: 0,
            timerType: "Break",
          }))
    
        } else {
          this.setState(state => ({
            minutes: this.props.sessionLength,
            seconds: 0,
            timerType: "Session",
          }))
        }
        //this.props.audioBeep.play();
      }
      // stop timer and reset to 25:00
      componentWillReceiveProps(newProps){
        clearInterval(this.tickTockInterval);
        this.tickTockInterval = null;
        this.setState({
          minutes: newProps.sessionLength,
          seconds: 0,
          timerType: "Session",
        })        
      }
    render(){
        const seconds = this.state.seconds;
        const minutes = this.state.minutes;
        const timerType = this.state.timerType;
        return(
            <div className="shadow box">
              <h1 id="timer-label">{timerType}</h1>
              <h1 id="time-left">{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
            
                <button id="start_stop" onClick={this.startStop} className="btn btn-link"><i class="fa fa-play"></i><i class="fa fa-pause"></i></button>
                <button id="reset" onClick={this.props.reset} className="btn btn-link"><i class="fa fa-refresh"></i></button>
            </div>
        );
    }
}

export default Timer;