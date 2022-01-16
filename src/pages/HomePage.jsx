import React from 'react';
import { useQuery } from 'react-query';

import Banner from '../components/Banner/Banner';
import LolomoRow from '../components/LolomoRow/LolomoRow';

function HomePage() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('http://localhost:3001/db').then((res) => res.json())
  );

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
