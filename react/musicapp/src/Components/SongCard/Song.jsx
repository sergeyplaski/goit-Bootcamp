import React from 'react';
import moment from 'moment';
import './Song.css';
import DefaultCardPic from './default64x64.png';
import FavIcon from './favorite.svg'
import AddIcon from './add.svg';
import YoutubeIcon from './youtube.svg';

// using moment.js to format song duration
const Song = ({url, name, artist, duration, arrFav, arrInt, arrData, index, addFav, handlerYT}) => {
    return (
            <div className="songs-item">
                <figure className="songs-item__figure">
                    <div className="songs-card__overlay">
                        <div className="songs-card__overlay-icons">
                            <img className="songs-card__overlay-icon" alt="Add to Favorites"
                                 src={FavIcon}
                                 data-arrforadd={arrFav}
                                 data-arrdata={arrData}
                                 data-index={index}
                                 onClick={addFav}
                            />
                            <img className="songs-card__overlay-icon" alt="Add to Play Queue"
                                 src={AddIcon}
                                 data-arrforadd={arrInt}
                                 data-arrdata={arrData}
                                 data-index={index}
                                 onClick={addFav}/>
                            <img className="songs-card__overlay-icon" alt="Search clip on Youtube"
                                 src={YoutubeIcon}
                                 data-query={`${typeof artist === "object" ? artist.name : artist} ${name}`}
                                 onClick={handlerYT}/>
                        </div>
                    </div>
                    <img className="songs-item__img" src={url !== '' ? url : DefaultCardPic} alt="" />
                        <figcaption className="songs-item__discription">
                            <p className="songs-item__music-name">{name}
                            {+duration > 0 ? '  (' + moment("1900-01-01 00:00:00").add(+duration, 'seconds').format("m:ss") +')' : ''}
                            </p>
                            <p className="songs-item__singer">{typeof artist === "object" ? artist.name : artist}</p>
                            <p className="songs-item-duration"></p>
                        </figcaption>
                </figure>
            </div>
    );
};

Song.propTypes = {};
Song.defaultProps = {};

export default Song;
