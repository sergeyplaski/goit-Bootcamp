import React from 'react';
import Card from '../Card/Card';
import './ArtistPage.css';

const ArtistPage = ({artistsData, addFav, handlerYT}) => {
        return (
            <div className="content">
                {artistsData.map((el, index) => <Card
                    url={el.image[2]['#text']}
                    name={el.name}
                    // info={`Listeners: ${el.listeners.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                    info={`Listeners: ${(+el.listeners).toLocaleString()}`}
                    addFav={addFav}
                    arrFav="artistsFav"
                    arrInt="artistsInt"
                    arrData="artistsData"
                    index={index} // index of element in the state.artistsData array
                    handlerYT={handlerYT}
                    key={el.name}
                />)}
            </div>
        );
};

export default ArtistPage;

