import React from 'react';
import ItemGrid from './ItemGrid';
import LoadingGrid from './LoadingGrid';

const HotSlices = ({ hostslices }) => {
  return (
    <div>
      <h2 className='center'>
        <span className='mark tilt'>Hot Slices!</span>
      </h2>
      <p>Come on by, buy the slice!</p>
      {!hostslices && <LoadingGrid count={4} />}

      {hostslices && !hostslices?.length && <p>No one is Working right now</p>}

      {hostslices?.length && <ItemGrid items={hostslices} />}
    </div>
  );
};

export default HotSlices;
