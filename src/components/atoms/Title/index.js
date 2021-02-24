import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classname';

const Title = ({ text, className }) => (
  <h5 className={cn(
    className,
  )}
  >
    {text}
  </h5>
);

Title.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

Title.defaultProps = {
  className: '',
};

export default Title;
