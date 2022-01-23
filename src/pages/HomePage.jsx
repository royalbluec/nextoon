import React from 'react';
import styled from 'styled-components';

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
      <Billboard />
      <LolomoRow data={data.webtoon} />
      <LolomoRow data={data.webtoon} />
      <LolomoRow data={data.webtoon} />
      <LolomoRow data={data.webtoon} />
      <LolomoRow data={data.webtoon} />
      <LolomoRow data={data.webtoon} />
      <LolomoRow data={data.webtoon} />
      <LolomoRow data={data.webtoon} />
    </div>
  );
}

const Billboard = styled.span`
  display: block;
  padding-bottom: 40%;
`;

export default HomePage;
