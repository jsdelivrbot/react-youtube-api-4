import React, { Component } from 'react';     // importing React (saving it as a 'React' variable from 'react' (inside node_modules))
import ReactDOM from 'react-dom';             // importing ReactDOM (saving it as a 'ReactDOM' variable from 'react-dom' (inside node_modules))
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';     // importing SearchBar component that I made
import VideoList from './components/video_list';       // importing VideoList component that I made
import VideoDetails from './components/video_details';

const container = document.querySelector('.container');   
// API KEY that I generated from https://console.developers.google.com/apis/dashboard
const API_KEY = 'AIzaSyDQKUj2RRG77rzW7N1pzWvkdncz2WNTvos';    


// main App function that returns a JSX with wrapper div and inside it generates a component Searchbar
// class based component which uses YTSearch method to fetch data, and then this data is store in this.state.videos
// added selectedVideo state so we can keep track of what item have been selected and change the embeded video in video details
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videos: [], 
      selectedVideo: null, 
    }

    // only the most parent component should be responsible for fetching data
    // this function is fetching data from YT API and taking this objects to the app state, also first element becomes embeded video
    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0], 
      });
    });
  }

  // function that handles onclick and sets state of the app to the video that was clicked
  onVideoSelect = (selectedVideo) => {
    this.setState({selectedVideo})
  };

  render() {
    return (
      <div>
        <SearchBar />
        {/* Im passing props with video to the VideoDetails component whih will be used to display selected video in the ebeded video */}
        <VideoDetails video={this.state.selectedVideo} />
        {/* Im passing props with videos variable and onVideoSelect function to the VideoList component */}
        <VideoList 
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect} />
      </div >
    );
  }
}

// ReactDom render method that renders to the front component App in location which is in a container variable
ReactDOM.render(<App />, container);
