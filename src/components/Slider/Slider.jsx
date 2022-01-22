import styled from 'styled-components';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import SliderContent from './SliderContent';

function Slider({ data }) {
  return (
    <SliderBlock role="slider">
      <HandlePrev>
        <LeftAngleIcon />
      </HandlePrev>
      <PageIndicator>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </PageIndicator>
      <SliderContent data={data} />
      <HandleNext>
        <RightAngleIcon />
      </HandleNext>
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

const PageIndicator = styled.ul`
  display: flex;
  position: absolute;
  right: 62px;
  margin: -12px 0 12px 0;
  padding: 0;
  list-style-type: none; 

  li {
    width: 12px;
    height: 2px;
    margin-left: 1px;
    background: #4d4d4d;
`;

export default Slider;
