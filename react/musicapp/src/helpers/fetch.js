import axios from 'axios';

export function fetchData(url) {
   return axios.get(url)
        .then(({status, data}) => {
            // console.log(data);
            return status === 200 ? data : [];
        });
}

export function getLocalData(key) {
    const result = JSON.parse(localStorage.getItem(key));
    return (result !== null) ? result : [];
}

export function fetchYTvideoId(query) {
    const API_KEY = 'AIzaSyDGN9rObP1myvj8xpwmr796k71zPmOp8Vk';
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${query}&type=video&key=${API_KEY}`;

    console.log(query);
    return axios.get(url)
        .then(({status, data}) => {
            return status === 200 ? data.items[0].id.videoId || data.items[0].id.channelId: null;
        });
}
