handlerYoutube = ({target}) => {
        if (target.className === 'close') {
            this.setState({
                youtubeIsActive: false,
            })
        } else {
        const query = target.dataset.query;
        console.log(query);
        youtubeFetch(query)
        .then(data => {
            console.log(data);
            this.setState({
                youtubeIsActive: true,
                videoID: data,
            })
        })
        }
        
        
    }