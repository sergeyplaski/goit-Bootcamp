import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

const Button = ({caption, onClick}) => {
    return (
        <button
            className={styles.btn}
            onClick={onClick}>{caption}
        </button>
    );
};

Button.propTypes = {
    caption: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string,
};

Button.defaultProps = {
    type: null,
};

export default Button;
