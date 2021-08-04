import React from 'react';
import ItemGrid from './ItemGrid';
import LoadingGrid from './LoadingGrid';

const CurrentlySlicing = ({ slicemasters }) => {
  return (
    <div>
      <h2 className='center'>
        <span className='mark tilt'>Slicemasters On</span>
      </h2>
      <p>Standing by, ready to slice you up!</p>
      {!slicemasters && <LoadingGrid count={4} />}

      {slicemasters && !slicemasters?.length && (
        <p>No one is Working right now</p>
      )}

      {slicemasters?.length && <ItemGrid items={slicemasters} />}
    </div>
  );
};

export default CurrentlySlicing;
