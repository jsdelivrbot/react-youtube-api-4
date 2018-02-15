import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';


const container = document.querySelector('.container');
const API_KEY = 'AIzaSyDQKUj2RRG77rzW7N1pzWvkdncz2WNTvos';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}



ReactDOM.render(<App />, container);
