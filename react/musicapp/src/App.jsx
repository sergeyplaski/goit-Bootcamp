import React, {Component} from 'react';
import {fetchData, fetchYTvideoId, getLocalData} from './helpers/fetch';
import {Switch, Route} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import Sidebar from './Components/Sidebar/Sidebar';
import Search from './Components/Search/Search';
import ArtistPage from "./Components/ArtistPage/ArtistPage";
import SongsPage from "./Components/SongsPage/SongsPage";
import AlbumPage from "./Components/AlbumPage/AlbumPage";
import YTplayer from './Components/YTplayer/YTplayer';
import './App.css';

class App extends Component {
    static defaultProps = {};
    static propTypes = {};

    state = {
        artistsData: [],
        songsData: [],
        albumsData: [],
        searchValue: '',
        isLoaded: false,
        artistsFav: [],
        albumsFav: [],
        songsFav: [],
        artistsInt: [],
        albumsInt: [],
        songsInt: [],
        YTactive: false,
        YTvideoId: '',
        showMenu: false,
    };

    componentDidMount() {
        // charts - top artists
        fetchData('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=e900a41307805d11c3527e8aeebf5d4b&format=json&limit=48')
            .then(data => {
                this.setState({
                    artistsData: data.artists.artist.sort((a,b) => (+b.listeners) - (+a.listeners)),
                    isLoaded: true,
                    artistsFav: getLocalData('artistsFav'),
                    albumsFav: getLocalData('albumsFav'),
                    songsFav: getLocalData('songsFav'),
                    artistsInt: getLocalData('artistsInt'),
                    albumsInt: getLocalData('albumsInt'),
                    songsInt: getLocalData('songsInt'),
                })
            });

        // charts - top albums
        fetchData('http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=pop&api_key=e900a41307805d11c3527e8aeebf5d4b&format=json&limit=48')
            .then(data => {
                this.setState({
                    albumsData: data.albums.album,
                    isLoaded: true,
                    artistsFav: getLocalData('artistsFav'),
                    albumsFav: getLocalData('albumsFav'),
                    songsFav: getLocalData('songsFav'),
                    artistsInt: getLocalData('artistsInt'),
                    albumsInt: getLocalData('albumsInt'),
                    songsInt: getLocalData('songsInt'),
                })
            });

        // charts = top songs
        fetchData('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=e900a41307805d11c3527e8aeebf5d4b&format=json')
            .then(data => {
                this.setState({
                    songsData: data.tracks.track.sort((a,b) => (+b.playcount) - (+a.playcount)),
                    isLoaded: true,
                    artistsFav: getLocalData('artistsFav'),
                    albumsFav: getLocalData('albumsFav'),
                    songsFav: getLocalData('songsFav'),
                    artistsInt: getLocalData('artistsInt'),
                    albumsInt: getLocalData('albumsInt'),
                    songsInt: getLocalData('songsInt'),
                })
            });
        }

    inputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value.toLowerCase();
        this.setState({
            [name]: value,
        })
    };

    searchData = (e) => {
        e.preventDefault();
        if (this.state.searchValue.trim() === '') return;
        fetchData(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${this.state.searchValue}&api_key=412e51e107155c7ffabd155a02371cbd&format=json&limit=48`)
            .then(({results}) => {
                this.setState({
                    artistsData: results.artistmatches.artist,
                    isLoaded: true,
                    YTactive: false,
                })
            });

        fetchData(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${this.state.searchValue}&api_key=412e51e107155c7ffabd155a02371cbd&format=json&limit=48`)
            .then(({results}) => {
                this.setState({
                    albumsData: results.albummatches.album,
                    isLoaded: true,
                    YTactive: false,
                })
            });

        fetchData(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${this.state.searchValue}&api_key=412e51e107155c7ffabd155a02371cbd&format=json&limit=48`)
            .then(({results}) => {
                this.setState({
                    songsData: results.trackmatches.track,
                    isLoaded: true,
                    YTactive: false,
                })
            });
    };

    /*addToFavorites = (name) => {
        const result = this.state.artistsData.find(artist => artist.name === name);
        console.log(result);
    };
    */

    addToFavorites = ({target}) => {
        const index = target.dataset.index;
        const arrData = target.dataset.arrdata; // 'artistsData', 'albumData', or 'SongsData'
        const arrForAdd = target.dataset.arrforadd; // 'artistsFav', 'albumFav', or 'SongsFav'
        // console.log("index:", index, "arrData:", arrData, "arrForAdd:", arrForAdd);

        const selectedItem = this.state[arrData][index];
        if (!this.state[arrForAdd].includes(selectedItem)) {
            this.setState(
                prev => ({ [arrForAdd]: [selectedItem, ...prev[arrForAdd]] }),
                () => {localStorage.setItem(`${arrForAdd}`, JSON.stringify(this.state[arrForAdd]))} //func callback. has access to the changed state (!)
                )
        }
    };

    handlerYoutube = ({target}) => {
        if (target.className === 'close') {
            this.setState({
                YTactive: false,
            });
            return;
        }
        const query = target.dataset.query;
        // console.log('query', query);
        fetchYTvideoId(query)
            .then((data) => {this.setState({
                YTactive: true,
                YTvideoId: data,
            })})
            .catch(err => console.log(err))
    };

    toggleSidebar = () => {
        this.setState({
            showMenu: !this.state.showMenu,
        })
    };

    render() {
        // desctucturizing state:
        const {artistsData, songsData, albumsData,
            artistsFav, albumsFav, songsFav,
            artistsInt, albumsInt, songsInt,
            searchValue, isLoaded, YTactive, YTvideoId, showMenu} = this.state;
        return (
            <div className='wrapper'>
                <div className="container">
                    <Sidebar showMenu={showMenu}/>
                    <main className='main'>
                        {YTactive ?
                            <YTplayer handler={this.handlerYoutube}
                                      videoId={YTvideoId}/>
                            : null
                        }
                        <Search
                            value={searchValue}
                            onChange={this.inputChange}
                            handlerSearch={this.searchData}
                            handlerSidebar={this.toggleSidebar}
                        />

                        {/*TODO: add breadcrumbs*/}
                        {isLoaded ?
                            <Switch>
                                <Route exact path='/' render={ () =>
                                    <ArtistPage
                                        artistsData={artistsData}
                                        addFav={this.addToFavorites}
                                        handlerYT={this.handlerYoutube}
                                    />
                                }/>
                                <Route path='/artists' render={ () =>
                                    <ArtistPage
                                        artistsData={artistsData}
                                        addFav={this.addToFavorites}
                                        handlerYT={this.handlerYoutube}
                                    />
                                }/>
                                <Route path='/albums' render={ () =>
                                    <AlbumPage
                                        albumsData={albumsData}
                                        addFav={this.addToFavorites}
                                        handlerYT={this.handlerYoutube}
                                    />
                                }/>
                                <Route path='/songs' render={ () =>
                                    <SongsPage
                                        songsData={songsData}
                                        addFav={this.addToFavorites}
                                        handlerYT={this.handlerYoutube}
                                    />
                                }/>
                                <Route path='/FavoriteArtists' render={() =>
                                    <ArtistPage
                                        artistsData={artistsFav}
                                        addFav={this.addToFavorites}
                                        handlerYT={this.handlerYoutube}
                                    />
                                }/>
                                <Route path='/FavoriteAlbums' render={ () =>
                                    <AlbumPage
                                        albumsData={albumsFav}
                                        addFav={this.addToFavorites}
                                    />
                                }/>
                                <Route path='/FavoriteSongs' render={ () =>
                                    <SongsPage
                                        songsData={songsFav}
                                        addFav={this.addToFavorites}
                                        handlerYT={this.handlerYoutube}
                                    />
                                }/>

                                <Route path='/InterestingArtists' render={() =>
                                    <ArtistPage
                                        artistsData={artistsInt}
                                        addFav={this.addToFavorites}
                                        handlerYT={this.handlerYoutube}
                                    />
                                }/>
                                <Route path='/InterestingAlbums' render={ () =>
                                    <AlbumPage
                                        albumsData={albumsInt}
                                        addFav={this.addToFavorites}
                                        handlerYT={this.handlerYoutube}
                                    />
                                }/>
                                <Route path='/InterestingSongs' render={ () =>
                                    <SongsPage
                                        songsData={songsInt}
                                        addFav={this.addToFavorites}
                                        handlerYT={this.handlerYoutube}
                                    />
                                }/>

                                <Route path='/*' render={ () =>
                                    <div>
                                        <span className='path404'>PATH NOT FOUND</span>
                                    </div>
                                }/>
                            </Switch>
                            :
                            <div className='loader-wrapper'>
                                <Loader
                                    type="ThreeDots"
                                    color="var(--red)"
                                    height="100"
                                    width="100"
                                />
                            </div>
                        }
                    </main>
                </div>
            </div>
        )
    }
}

export default App;