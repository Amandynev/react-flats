import React from 'react';
import Flat from './flat';

import flats from './data/flats';

const FlatList = (props) => {
  const renderList = () => {
    return props.flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          key={flat.id}
          selected={flat.name === props.selectedFlat.name}
          index={index}

        />
      );
    });
  };

  return (
    <div className="flat-list">
      {renderList()}
    </div>
  );
};

export default FlatList;
