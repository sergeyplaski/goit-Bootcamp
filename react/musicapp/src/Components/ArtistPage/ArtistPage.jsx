import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './ArtistPage.css';

class ArtistPage extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <div className="content">
                <Card artist="Gorillaz"
                      pic="https://lastfm-img2.akamaized.net/i/u/174s/36422c10f46150b432a7d0ddbc87c5d3.png"
                      alt="artist pic"
                      link="https://www.last.fm/music/Gorillaz"
                />
            </div>
        );
    }
}

export default ArtistPage;

