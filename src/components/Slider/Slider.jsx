import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import styled from 'styled-components';

import SliderContent from './SliderContent';
import PageIndicator from './PageIndicator';

function Slider({ data }) {
  const [pageNumber, setPageNumber] = useState(0);

  const totalItmeNumber = 6;
  const totalPageNumber = new Array(
    Math.ceil(data.length / totalItmeNumber)
  ).fill(1);

  const goPrevPage = () => {
    if (pageNumber !== 0) {
      setPageNumber(pageNumber - 1);
    }
  };

  const goNextPage = () => {
    if (pageNumber !== totalPageNumber.length - 1) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <SliderBlock role="slider">
      {pageNumber !== 0 && (
        <HandlePrev>
          <LeftAngleIcon onClick={goPrevPage} />
        </HandlePrev>
      )}
      <PageIndicator
        totalPageNumber={totalPageNumber}
        pageNumber={pageNumber}
      />
      <SliderContent data={data} />
      {pageNumber !== totalPageNumber.length - 1 && (
        <HandleNext>
          <RightAngleIcon onClick={goNextPage} />
        </HandleNext>
      )}
    </SliderBlock>
  );
}

const SliderBlock = styled.div`
  display: flex;
  height: 165px;
`;

const HandlePrev = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  width: 60px;
  height: 165px;
  background: rgba(20, 20, 20, 0.5);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const HandleNext = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  width: 60px;
  height: 165px;
  background: rgba(20, 20, 20, 0.5);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const LeftAngleIcon = styled(FaAngleLeft)`
  width: 40px;
  height: 40px;

  &:hover {
    cursor: pointer;
  }
`;

const RightAngleIcon = styled(FaAngleRight)`
  width: 40px;
  height: 40px;

  &:hover {
    cursor: pointer;
  }
`;

export default Slider;
