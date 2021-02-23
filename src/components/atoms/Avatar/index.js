import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classname';
import styled from 'styled-components';
import avatar from '../../../assets/images/avatar.png';

const AvatarImage = styled.img`
  height: 36px;
  width: 36px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
`;

const Avatar = ({
  className, imageUrl, alt,
}) => (
  <AvatarImage
    src={imageUrl}
    alt={alt}
    className={cn(className)}
  />
);

Avatar.propTypes = {
  className: PropTypes.string,
  imageUrl: PropTypes.string,
  alt: PropTypes.string,
};

Avatar.defaultProps = {
  className: '',
  imageUrl: avatar,
  alt: 'Avatar image',
};

export default Avatar;
