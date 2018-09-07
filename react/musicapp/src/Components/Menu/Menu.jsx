import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import SubMenu from '../Submenu/Submenu';
import './Menu.css';

const Menu = ({menu}) => {
    return (
        <ul className='menu'>
            {menu.map(el => !el.submenu ?
                <li className='menu__item' key={el.text}>
                    <NavLink to={el.link} className='menu__link'>{el.text}</NavLink>
                </li> :
                <li className='menu__item' key={el.text}>
                    <NavLink to={el.link} className='menu__link'>{el.text}</NavLink>
                    <SubMenu sub={[
                        {text: 'Artists', link: `${el.text}Artists`, parentKey: el.text},
                        {text: 'Albums', link: `${el.text}Albums`, parentKey: el.text},
                        {text: 'Songs', link: `${el.text}Songs`, parentKey: el.text}
                    ]}/>
                </li>
            )}
        </ul>
        )
};

Menu.propTypes = {
  menu: PropTypes.arrayOf(
      PropTypes.shape({
          text: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
          submenu: PropTypes.bool.isRequired,
      })
  )
};

export default Menu;