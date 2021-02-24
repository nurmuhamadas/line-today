import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classname';
import { Title } from '../../atoms';
import { PostComponent } from '../../molecules';
import './style.css';

const PostSection = ({
  title, posts, className, postOnclick,
}) => (
  <div className={cn(className, 'post_wrap')}>
    <Title text={title} className="section_title" />
    <div className="post_main">
      {
        posts.map((postData) => (
          <PostComponent
            key={postData.title}
            title={postData.title}
            publisher={postData.publisher}
            imageUrl={postData.imageUrl}
            onClick={postOnclick}
            type="card"
            className="post_item"
          />
        ))
      }
    </div>
  </div>
);

PostSection.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  postOnclick: PropTypes.func,
};

PostSection.defaultProps = {
  className: '',
  postOnclick: () => '',
};

export default PostSection;
