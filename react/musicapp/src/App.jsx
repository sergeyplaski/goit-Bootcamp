import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Search from './Search/Search';
import './App.css';

const App = () => {
    return (
            <div className='wrapper'>
                <div className="container">
                    <Sidebar/>
                    <div className='main'>
                        <Search/>
                    </div>
                </div>
            </div>
            )
            };


            export default App;