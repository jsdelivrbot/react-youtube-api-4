import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import { hot } from 'react-hot-loader';
import SearchBar from './common/search_bar/search_bar';
import VideoList from './common/video_list/video_list';
import VideoDetails from './common/video_details/video_details';

const API_KEY = 'AIzaSyDQKUj2RRG77rzW7N1pzWvkdncz2WNTvos';
// API KEY that I generated from https://console.developers.google.com/apis/dashboard

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
        };
        this.videoSearch('surfboards');
    }

    videoSearch = (term) => {
        YTSearch({ key: API_KEY, term }, (videos) => {
            this.setState({ videos, selectedVideo: videos[0], });
        });
    };

    videoSearchDebounced = _.debounce((term) => { this.videoSearch(term); }, 500);

    onVideoSelect = (selectedVideo) => this.setState({ selectedVideo });

    render() {
        const { selectedVideo, videos } = this.state;
        return (
            <div>
                <SearchBar onSearchTermChange={this.videoSearchDebounced} />
                <VideoDetails video={selectedVideo} />
                <VideoList
                    videos={videos}
                    onVideoSelect={this.onVideoSelect}
                />
            </div>
        );
    }
}

export default hot(module)(App);
