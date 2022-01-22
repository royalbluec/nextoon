import styled from 'styled-components';

function SliderItem({ item }) {
  return (
    <SliderItemBlock role="sliderItem">
      {item && (
        <div>
          <SliderItemImg alt={item.title} src={item.thumbnail} />
        </div>
      )}
    </SliderItemBlock>
  );
}

const SliderItemBlock = styled.div``;

const SliderItemImg = styled.img`
  width: 293px;
  height: 165px;
  object-fit: cover;
`;

export default SliderItem;
