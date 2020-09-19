import React from 'react';
import { propTypes } from './prop-types';
import './styles.css';

class TimerLengthControl extends React.Component {
  decrementLength = () => {
    const { length, setLength } = this.props;

    if (length !== 1) {
      setLength(length - 1);
    }
  };

  incrementLength = () => {
    const { length, setLength } = this.props;
    if (length !== 60) {
      setLength(length + 1);
    }
  };

  render() {
    const { id, length, title } = this.props;
    return (
      <div className='shadow box'>
        <h2 id={`${id}-label`}>{title}</h2>
        <button
          type='button'
          id={`${id}-increment`}
          onClick={this.incrementLength}
          className='btn btn-link'
        >
          <i className='fa fa-arrow-up' />
        </button>
        <span id={`${id}-length`}>{length}</span>
        <button
          type='button'
          id={`${id}-decrement`}
          onClick={this.decrementLength}
          className='btn btn-link'
        >
          <i className='fa fa-arrow-down' />
        </button>
      </div>
    );
  }
}

TimerLengthControl.propTypes = propTypes;

export { TimerLengthControl };
