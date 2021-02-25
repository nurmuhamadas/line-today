import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classname';
import './style.css';
import { Link } from 'react-router-dom';
import { ButtonIcon } from '../../atoms';

const Sidebar = ({
  menus, className, activeLink, toggleButtonClick,
}) => (
  <aside className={cn(className, 'sidebar')}>
    <ButtonIcon
      onClick={toggleButtonClick}
      icon="menu-outline"
      label="Toggle sidebar"
      type="filled"
      className="btn_toggle"
    />
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
  toggleButtonClick: PropTypes.func,
};

Sidebar.defaultProps = {
  className: '',
  activeLink: 'TOP',
  toggleButtonClick: () => '',
};

export default Sidebar;
