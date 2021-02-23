import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classname';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Image = ({
  alt, className, height, imageUrl, width, onClick,
}) => (
  <StyledImage
    className={cn(className)}
    src={imageUrl}
    alt={alt}
    width={width}
    height={height}
    onClick={onClick}
  />
);

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  height: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

Image.defaultProps = {
  className: '',
  onClick: () => '',
};

export default Image;
