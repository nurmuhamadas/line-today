import React from 'react';
import cn from 'classname';
import PropTypes from 'prop-types';
import { Content, Image } from '../../atoms';
import './style.css';

const Post = ({
  className, imageUrl, alt, title, publisher, onClick, type,
}) => (
  <div
    className={cn(
      'post',
      className,
      type,
    )}
    onClick={onClick}
    onKeyPress={onClick}
    role="link"
    tabIndex={0}
  >
    <Image
      imageUrl={imageUrl}
      alt={alt}
      className="post_image"
      width={250}
      height={175}
    />
    <Content
      title={title}
      publisher={publisher}
      type={type}
      className="post_content"
    />
  </div>
);

Post.propTypes = {
  className: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Post.defaultProps = {
  className: '',
  onClick: () => '',
  type: 'card',
};

export default Post;
