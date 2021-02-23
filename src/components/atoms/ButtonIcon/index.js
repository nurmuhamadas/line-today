import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classname';
import './style.css';

export const ButtonType = {
  FILLED: 'filled',
  OUTLINED: 'outlined',
  DEFAULT: 'default',
};

const ButtonIcon = ({
  className, label, icon, color, type, onClick, size,
}) => (
  <button
    type="button"
    aria-label={label}
    className={cn(
      'btn_icon',
      type,
      className,
    )}
    onClick={onClick}
    style={{ color, fontSize: size }}
  >
    <ion-icon name={icon} />
  </button>
);

ButtonIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.number,
};

ButtonIcon.defaultProps = {
  className: '',
  color: '',
  type: ButtonType.DEFAULT,
  onClick: () => '',
  size: 24,
};

export default ButtonIcon;
