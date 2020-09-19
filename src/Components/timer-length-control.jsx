import React from 'react';
import './styles.css'
export default class TimerLengthControl extends React.Component {
    decrementLength = () => {
        const length = this.props.length;
        if(length !== 1){
          this.props.setLength(length - 1)
        }
      }
      incrementLength = () => {
        const length = this.props.length;
        if(length !== 60){
          this.props.setLength(length + 1)
        }
      }
    render(){
        const title = this.props.title;
        const length = this.props.length;
        const id = this.props.id;
        return(

            <div className="shadow box">
                <h2 id={`${id}-label`}>{title}</h2>
                <button id={`${id}-increment`} onClick={this.incrementLength}                            className="btn btn-link">
                    <i class="fa fa-arrow-up"></i>
                </button>
                <span id={`${id}-length`}>{length}</span>
                <button id={`${id}-decrement`} onClick={this.decrementLength}                              className="btn btn-link">
                    <i class="fa fa-arrow-down"></i>   
                </button>
            </div>
        )
    }
}