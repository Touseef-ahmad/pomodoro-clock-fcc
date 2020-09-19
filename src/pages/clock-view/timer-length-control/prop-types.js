import { number, string, func } from 'prop-types';

export const propTypes = {
  id: number.isRequired,
  length: number.isRequired,
  title: string.isRequired,
  setLength: func.isRequired,
};
