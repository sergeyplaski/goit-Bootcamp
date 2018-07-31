import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Search from './Components/Search/Search';
import Card from "./Components/Card/Card";
import './App.css';

const App = () => {
    return (
        <div className='wrapper'>
            <div className="container">
                <Sidebar/>
                <div className='main'>
                    <Search/>
                    <Card artist="Gorillaz"
                          pic="https://lastfm-img2.akamaized.net/i/u/174s/36422c10f46150b432a7d0ddbc87c5d3.png"
                          alt="artist pic"
                          link="https://www.last.fm/music/Gorillaz"
                    />
                </div>
            </div>
        </div>
    )
};

export default App;