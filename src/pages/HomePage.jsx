import React from 'react';

import Banner from '../components/Banner/Banner';
import LolomoRow from '../components/LolomoRow/LolomoRow';
import useData from '../hooks/useData';

function HomePage() {
  const { isLoading, error, data } = useData();

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <Banner />
      HomePage
      <LolomoRow data={data.webtoon} />
    </div>
  );
}

export default HomePage;
