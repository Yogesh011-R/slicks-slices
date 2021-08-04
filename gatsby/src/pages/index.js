import React from 'react';
import CurrentlySlicing from '../components/CurrentlySlicing';
import HotSlices from '../components/HotSlices';
import { HomePageGrid } from '../styles/Grids';
import useLatestData from '../utils/useLatestData';

const HomePage = () => {
  const { sliceMasters, hostSlices } = useLatestData();
  return (
    <div className='center'>
      <h1>The Best Pizza Downtown!</h1>
      <p>Open 11am to 11pm Every Single Day</p>
      <HomePageGrid>
        <CurrentlySlicing slicemasters={sliceMasters} />
        <HotSlices hostslices={hostSlices} />
      </HomePageGrid>
    </div>
  );
};

export default HomePage;
