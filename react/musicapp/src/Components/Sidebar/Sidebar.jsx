import React from 'react';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside className="aside">
            <Logo/>
            <Menu menu = {[
                    {text: 'Main', link: '#', submenu: false},
                    {text: 'Interesting', link: '#', submenu: true},
                    {text: 'Favourite', link: '#', submenu: true},
                    {text: 'Recommended', link: '#', submenu: false},
                    {text: 'Playlist', link: '#', submenu: false}
                ]}/>
        </aside>
    )
};

export default Sidebar;