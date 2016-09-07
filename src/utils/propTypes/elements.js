import { PropTypes } from 'react';

export const elements = PropTypes.oneOfType([
  PropTypes.element,
  PropTypes.arrayOf(PropTypes.element),
]);

export default elements;
