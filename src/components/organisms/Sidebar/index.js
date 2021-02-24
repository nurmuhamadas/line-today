import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classname';
import './style.css';
import { Link } from 'react-router-dom';

const Sidebar = ({
  menus, className, activeLink,
}) => (
  <aside className={cn(className, 'sidebar')}>
    <nav className="menus">
      <ul>
        {
          menus.map((menu) => (
            <li key={menu.id} className="menu_item">
              <Link to={`/tab/${menu.name}`} className={cn('menu_link', { active: menu.name === activeLink })}>
                {menu.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  </aside>
);

Sidebar.propTypes = {
  className: PropTypes.string,
  menus: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeLink: PropTypes.string,
};

Sidebar.defaultProps = {
  className: '',
  activeLink: 'TOP',
};

export default Sidebar;
