import React from 'react';
import './Card.css';
import DefaultCardPic from './default174x174.png'
import FavIcon from './favorite.svg'
import AddIcon from './add.svg';
import YoutubeIcon from './youtube.svg';

const Card = ({url, name, info, arrFav, arrInt, arrData, index, addFav, handlerYT}) => {
    // first way: use aux function, to be used with onClick
    // const getName = () => {
    //     addFav(name)
    // };

    return (
        <div className="artist-card">
            <figure>
                <div className="card__overlay">
                    <div className="card__overlay-icons">
                        {/*<img className="card__overlay-icon" src={FavIcon} alt="" onClick={getName}/>*/}
                        <img className="card__overlay-icon"
                             src={FavIcon} alt=""
                             data-arrforadd={arrFav}
                             data-arrdata={arrData}
                             data-index={index}
                             onClick={addFav}/>
                        <img className="card__overlay-icon"
                             src={AddIcon} alt=""
                             data-arrforadd={arrInt}
                             data-arrdata={arrData}
                             data-index={index}
                             onClick={addFav}/>
                        <img className="card__overlay-icon" alt=""
                             src={YoutubeIcon}
                             // data-query={arrData === 'artistsData'
                             //     ? (typeof name === "object" ? name.name : name)
                             //     : name }
                            data-query={arrData === 'albumsData'
                                ? `${typeof info === "object" ? info.name : info} ${name}`
                                : `${name} +about`
                            }
                             onClick={handlerYT}
                        />
                    </div>
                </div>

                <img src={url !== '' ? url : DefaultCardPic} className="artist-card__img" alt=""/>
                <figcaption>
                    <p className="artist-card__name">{name}</p>
                    <p className="artist-card__number-albums">{typeof info === "object" ? info.name : info}</p>
                    {/*depending on the structure of object returned*/}
                    {/*<a href={link} className="artist-card__link">See more...</a>*/}
                </figcaption>
            </figure>
        </div>
    );
};

Card.propTypes = {};
Card.defaultProps = {};

export default Card;
