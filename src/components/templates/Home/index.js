import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classname';
import './style.css';
import {
  Navbar, PostSection, Sidebar,
} from '../../organisms';

const HomeTemplate = ({
  sideMenuItems, navbarAvatar, className, showSidebar,
  navbarActiveLink, articlesSection, postOnclick, toggleSidebar,
}) => (
  <div id="home" className={className}>
    <Navbar
      avatar={navbarAvatar}
      className="home_navbar"
    />
    <main id="home_main">
      <Sidebar
        menus={sideMenuItems}
        className={cn('home_sidebar', { show_sidebar: showSidebar })}
        activeLink={navbarActiveLink}
        toggleButtonClick={toggleSidebar}
      />
      <div className="home_articles">
        {
          articlesSection.map((section) => (
            <PostSection
              key={section.id}
              posts={section.articles}
              title={section.title}
              postOnclick={postOnclick}
              className="home_post_section"
            />
          ))
        }
      </div>
    </main>
  </div>
);

HomeTemplate.propTypes = {
  className: PropTypes.string,
  navbarAvatar: PropTypes.string,
  sideMenuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  articlesSection: PropTypes.arrayOf(PropTypes.object),
  showSidebar: PropTypes.bool,
  navbarActiveLink: PropTypes.string,
  postOnclick: PropTypes.func,
  toggleSidebar: PropTypes.func,
};

HomeTemplate.defaultProps = {
  className: '',
  navbarAvatar: null,
  showSidebar: true,
  navbarActiveLink: '',
  articlesSection: [],
  postOnclick: () => '',
  toggleSidebar: () => '',
};

export default HomeTemplate;
