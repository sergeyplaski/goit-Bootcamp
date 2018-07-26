'use strict';
let searchInput = document.querySelector('.search__input');
let searchBtn = document.querySelector('.search__btn');
let artistArr =[];



searchBtn.addEventListener('click', SearchAlbum);

function SearchAlbum(event){
    event.preventDefault();
    let searchQuery;
    function getSearchInput(){
        searchQuery = searchInput.value;
    }
    getSearchInput();
    let url = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=asdf&api_key=e900a41307805d11c3527e8aeebf5d4b&format=json`;
    fetch(url )
        .then(response=> response.ok ? response.json():null)
        .then(data=> {
            artistArr.push(data);
            console.log(artistArr);
        });
}