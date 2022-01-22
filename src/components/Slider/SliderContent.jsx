import styled from 'styled-components';

import SliderItem from './SliderItem';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function SliderContent({ data, pageNumber, restOfItem, totalPage }) {
  const { width } = useWindowDimensions();

  return (
    <SliderContentBlock
      role="slider-content"
      $pageNumber={pageNumber}
      $width={width}
      $restOfItem={restOfItem}
      $totalPage={totalPage}
    >
      {data && data.map((item) => <SliderItem key={item.id} item={item} />)}
    </SliderContentBlock>
  );
}

const handleTransformType = (pageNumber, width, restOfItem, totalPage) => {
  let x;
  if (pageNumber === totalPage - 1) {
    x = -(width - 17 - 120 - 8) * (pageNumber - 1);
    x -= ((width - 17 - 120 - 8) / 6) * restOfItem;
  } else {
    x = -(width - 17 - 120 - 8) * pageNumber;
  }

  return 'translateX(' + x + 'px)';
};

const SliderContentBlock = styled.div`
  display: flex;
  padding-bottom: 1px;
  padding-left: 4px;
  transform: ${(props) =>
    handleTransformType(
      props.$pageNumber,
      props.$width,
      props.$restOfItem,
      props.$totalPage
    )};
  transition: 0.4s ease all;
`;

export default SliderContent;
