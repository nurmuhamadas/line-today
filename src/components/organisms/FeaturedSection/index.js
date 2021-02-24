import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classname';
import { PostComponent } from '../../molecules';
import './style.css';

const FeaturedSection = ({
  className, posts, postOnclick,
}) => (
  <section className={cn('wrap_featured', className)}>
    {
      posts.map((postData) => (
        <PostComponent
          key={postData.title}
          alt={postData.title}
          title={postData.title}
          publisher={postData.publisher}
          imageUrl={postData.imageUrl}
          onClick={() => postOnclick(posts.id)}
          type="featured"
        />
      ))
    }
  </section>
);

FeaturedSection.propTypes = {
  className: PropTypes.string,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  postOnclick: PropTypes.func,
};

FeaturedSection.defaultProps = {
  className: '',
  postOnclick: () => '',
};

export default FeaturedSection;
