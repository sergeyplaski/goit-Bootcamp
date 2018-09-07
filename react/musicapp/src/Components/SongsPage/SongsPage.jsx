import React from 'react';
import Song from '../SongCard/Song';
import './SongsPage.css';

const SongsPage = ({songsData, addFav, handlerYT}) => {
    return (
        <div className="content">
            {songsData.map((el, index) => <Song
                url={el.image[1]['#text']}
                name={el.name}
                artist={el.artist}
                duration={el.duration}
                addFav={addFav}
                arrFav="songsFav"
                arrInt="songsInt"
                arrData="songsData"
                index={index} // index of element in the state.songsData array
                handlerYT={handlerYT}
                key={el.url}
            />)}
        </div>
    );
};

export default SongsPage;
