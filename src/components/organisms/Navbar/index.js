import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classname';
import logo from '../../../assets/images/logo.png';
import placeholder from '../../../assets/images/avatar.png';
import './style.css';
import { AvatarImage, ButtonIcon, Image } from '../../atoms';

const Navbar = ({
  className, avatar,
}) => (
  <header className={cn(className, 'navbar')}>
    <Image
      alt="Line today"
      width={36}
      height={36}
      imageUrl={logo}
      className="brand_logo"
    />
    <div className="right_component">
      <ButtonIcon
        color="#7f7f7f"
        icon="notifications-outline"
        label="Notification"
        className="notif_icon"
      />
      <AvatarImage
        alt="Profile photos"
        imageUrl={avatar}
      />
    </div>
  </header>
);

Navbar.propTypes = {
  className: PropTypes.string,
  avatar: PropTypes.string,
};

Navbar.defaultProps = {
  className: '',
  avatar: placeholder,
};

export default Navbar;
