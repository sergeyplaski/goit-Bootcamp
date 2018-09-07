import React from 'react';
import {NavLink} from 'react-router-dom'
import './Chart.css';

const Chart = ({handlerSidebar}) => {
    return (
        <div className="chart">
            <ul className="chart-list">
                <li>
                    <NavLink exact to='/' className="chart-list__item" activeClassName='selected'>
                        Artists
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/albums' className="chart-list__item" activeClassName='selected'>
                        Albums
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/songs' className="chart-list__item" activeClassName='selected'>
                        Songs
                    </NavLink>
                </li>
            </ul>
            <span
                className="mobile-menu"
                onClick={handlerSidebar}
            >&#9776;</span>
        </div>
    );
};

Chart.propTypes = {};
Chart.defaultProps = {};

export default Chart;
