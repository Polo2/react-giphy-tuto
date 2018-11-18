import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "2cdYfc9hMr9df6dS2s",
    }

    this.search("barney");
  }

  search = (query) => {
    giphy('h0XIjUnHZEDlm13aUZOYnba49cti8r6t').search({
      q: query,
      rating: 'g',
      limit: 10,
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    const gifs = [
      { id: "2cdYfc9hMr9df6dS2s" },
      { id: "3djE7TqhezgA44e54k" },
      { id: "KzM1lAfJjCWNq" },
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
