import React from 'react';
import './YTplayer.css';

const YTplayer = ({handler, videoId}) => {
    return (
        <div className='player'>
            <p
                className='close'
                onClick={handler}
            >&#10006;</p>
            <iframe className="player"
                    title="YouTube video"
                    width="640" height="360"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    frameBorder="0" allow="autoplay" allowFullScreen
            />
        </div>
    )
};

export default YTplayer;