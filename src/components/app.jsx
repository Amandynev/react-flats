import React, { Component } from 'react';

import flats from './data/flats';
import Flat from './flat';
import FlatList from './flat_list';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  render() {
    return (
      <div>
        <div className="">
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.state.selectFlat}

        />
        </div>
        <div className="map-container">
        </div>
      </div>
    );
  }
}

export default App;
