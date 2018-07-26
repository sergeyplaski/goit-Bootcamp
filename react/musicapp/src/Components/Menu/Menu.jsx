import React from 'react';
import PropTypes from 'prop-types';
import SubMenu from '../Submenu/Submenu'
import './Menu.css';

const Menu = ({menu}) => {
    return (
        <ul className='menu'>
            {menu.map(el => !el.submenu ?
                <li className='menu__item' key={el.text}>
                    <a href={el.link} className='menu__link'>{el.text}</a>
                </li> :
                <li className='menu__item' key={el.text}>
                    <a href={el.link} className='menu__link'>{el.text}</a>
                    <SubMenu sub={[
                        {text: 'Artists', link: '#', parentKey: el.text},
                        {text: 'Albums', link: '#', parentKey: el.text},
                        {text: 'Songs', link: '#', parentKey: el.text}
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