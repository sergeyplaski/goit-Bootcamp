import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({artist, pic, alt, link}) => {
    return (
        <div className="artist-card">
            <figure>
                <img src={pic} alt={alt} className="artist-card__img"/>
                <figcaption>
                    <p className="artist-card__name">{artist}</p>
                    {/*<p className="artist-card__number-albums">5 albums</p>*/}
                    <a href={link} className="artist-card__link">See more...</a>
                </figcaption>
            </figure>
        </div>
    );
};

Card.propTypes = {};
Card.defaultProps = {};

export default Card;
