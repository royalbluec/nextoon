import styled from 'styled-components';

import SliderItem from './SliderItem';

function SliderContent({ data }) {
  return (
    <SliderContentBlock>
      {data && data.map((item) => <SliderItem key={item.id} item={item} />)}
    </SliderContentBlock>
  );
}

const SliderContentBlock = styled.div`
  display: flex;
`;

export default SliderContent;
