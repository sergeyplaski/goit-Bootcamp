import React from 'react';
// import PropTypes from 'prop-types';
import './Search.css';
import Chart from "../Chart/Chart";

const Search = (props) => {
    return (
        <div className='search'>
            <form action="#" method="post" className="search__form">
                <input type="text" className="search__input" placeholder="Search music" />
                <input type="submit" value="search" className="search__btn" />
            </form>
            <Chart/>
        </div>
    );
};

Search.propTypes = {};
Search.defaultProps = {};

export default Search;
