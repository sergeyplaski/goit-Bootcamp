import React from 'react';
// import {NavLink} from 'react-router-dom';
import './Logo.css';
import LogoImg from './home.png';

const Logo = () => {
    return (
        <a href="/" className="logo">
            {/*<h1 className="title">Logo</h1>*/}
            <img src={LogoImg} className="logo__img" alt="logo" />
        </a>
    )
};

export default Logo;