import React from 'react';
import Card from '../Card/Card';
import '../ArtistPage/ArtistPage.css'; // styles are the same as ArtistPage

const AlbumPage = ({albumsData, addFav, handlerYT}) => {
    return (
        <div className="content">
            {albumsData.map((el, index) => <Card
                url={el.image[2]['#text']}
                name={el.name} //album name
                info={el.artist} //artist object or name
                addFav={addFav}
                arrFav="albumsFav"
                arrInt="albumsInt"
                arrData="albumsData"
                index={index} // index of element in the state.albumsData array
                handlerYT={handlerYT}
                key={el.url + el.name}
            />)}
        </div>
    );
};

export default AlbumPage;
