import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import styled from 'styled-components';

import SliderContent from './SliderContent';
import PageIndicator from './PageIndicator';

function Slider({ data }) {
  const [pageNumber, setPageNumber] = useState(0);

  const totalItmeNumber = 6;
  let totalPageNumber;
  let restOfItem;

  if (data) {
    totalPageNumber = new Array(Math.ceil(data.length / totalItmeNumber)).fill(
      1
    );
    restOfItem =
      data.length - totalItmeNumber * Math.floor(data.length / totalItmeNumber);
  }

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

  // data page에 따라 filtering 처리하기
  // onmouseenter, onmouseover, onmouseout, onmousemove에 따라 angle-icon, page-indicator 처리하기

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
      {totalPageNumber && (
        <SliderContent
          data={data}
          pageNumber={pageNumber}
          restOfItem={restOfItem}
          totalPage={totalPageNumber.length}
        />
      )}
      {totalPageNumber && pageNumber !== totalPageNumber.length - 1 && (
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
  z-index: 2;

  &:hover {
    background: rgba(20, 20, 20, 0.7);
  }
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
  z-index: 2;

  &:hover {
    background: rgba(20, 20, 20, 0.7);
  }
`;

const LeftAngleIcon = styled(FaAngleLeft)`
  width: 40px;
  height: 40px;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

const RightAngleIcon = styled(FaAngleRight)`
  width: 40px;
  height: 40px;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

export default Slider;
