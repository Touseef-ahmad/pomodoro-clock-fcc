import { number, func } from 'prop-types';

export const propTypes = {
  breakLength: number.isRequired,
  sessionLength: number.isRequired,
  reset: func.isRequired,
};
