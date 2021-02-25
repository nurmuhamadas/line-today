import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classname';
import { Title } from '../../atoms';
import { PostComponent } from '../../molecules';
import './style.css';

const PostSection = ({
  title, posts, className, postOnclick,
}) => (
  <section className={cn(className, 'post_wrap')}>
    <Title text={title} className="section_title" />
    <div className="post_main">
      {
        posts.map((postData) => (
          <PostComponent
            key={postData.id}
            alt={postData.title}
            title={postData.title}
            publisher={postData.publisher}
            imageUrl={postData.imageUrl}
            onClick={() => postOnclick(postData.url.url)}
            type="card"
            className="post_item"
          />
        ))
      }
    </div>
  </section>
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
