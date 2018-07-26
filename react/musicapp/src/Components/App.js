import React from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar';

const App = () => {
    return (
        <div>
            <div className='wrapper'>
                <div className="container">
                    <Sidebar/>
                </div>
            </div>
        </div>
    )
};

export default App;