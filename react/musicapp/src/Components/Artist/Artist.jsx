import React from 'react';
import PropTypes from 'prop-types';
import '/.Artist.css'

const Artist = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

Artist.propTypes = {};
Artist.defaultProps = {};

export default Artist;
