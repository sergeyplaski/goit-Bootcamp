import React from 'react';
// import PropTypes from 'prop-types';
import './Chart.css';

const Chart = (props) => {
    return (
        <div className="chart">
            <ul className="chart-list">
                <li className="chart-list__item">Artists</li>
                <li className="chart-list__item">Albums</li>
                <li className="chart-list__item">Songs</li>
            </ul>
        </div>
    );
};

Chart.propTypes = {};
Chart.defaultProps = {};

export default Chart;
