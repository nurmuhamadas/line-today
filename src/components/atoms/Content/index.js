import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classname';
import './style.css';

const Content = ({
  className, publisher, title, type,
}) => (
  <div className={cn(
    'content',
    type,
    className,
  )}
  >
    <p className="overline">{publisher}</p>
    <p className="subtitle-2">{title}</p>
  </div>
);

Content.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  publisher: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Content.defaultProps = {
  className: '',
  type: 'card',
};

export default Content;
