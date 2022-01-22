import styled from 'styled-components';

function SliderItem({ item }) {
  return (
    <SliderItemBlock role="slider-item">
      {item && <SliderItemImg alt={item.title} src={item.thumbnail} />}
    </SliderItemBlock>
  );
}

const SliderItemBlock = styled.div`
  margin: 0 4px;
  // margin: 0 0.2vw;
  // padding: 0 0.2vw;
  flex: 0 0 calc((100% - 4px) / 6 - 8px);
`;

const SliderItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;

  :hover {
    cursor: pointer;
  }
`;

export default SliderItem;
