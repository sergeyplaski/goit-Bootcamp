import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import '../Menu/Menu.css';

const SubMenu = ({sub}) => {
    return (
      <ul className="sub-menu">
          {sub.map(el =>
              <li className='sub-menu__item' key={`${el.parentKey}${el.text}`}>  {/*unique key*/}
                  <NavLink className='sub-menu__link' to={el.link}>{el.text}</NavLink>
              </li>
          )}
      </ul>
    );
};

SubMenu.propTypes = {
    sub: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            parentKey: PropTypes.string.isRequired,
        })
    )
};

export default SubMenu;