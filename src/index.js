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
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videos: [], 
      selectedVideo: null, 
    };
    
    // only the most parent component should be responsible for fetching data
    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0], 
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList 
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })} />
      </div >
    );
  };
}

// ReactDom render method that renders to the front component App in location which is in a container variable
ReactDOM.render(<App />, container);
