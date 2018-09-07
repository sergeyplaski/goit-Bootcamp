import React from 'react';
// import PropTypes from 'prop-types';
import './Search.css';
import Chart from "../Chart/Chart";

const Search = ({value, onChange, handlerSearch, handlerSidebar}) => {
    return (
        <div className='search'>
            <form action="#" method="post" className="search__form" onSubmit={handlerSearch}>
                <input type="text" name="searchValue" className="search__input" placeholder="Search music..." onChange={onChange} />
                <input type="submit" value="search" className="search__btn" />
            </form>
            <Chart handlerSidebar={handlerSidebar}/>
        </div>
    );
};

Search.propTypes = {};
Search.defaultProps = {};

export default Search;
