import styled from 'styled-components';

import Slider from '../Slider/Slider';

function RowContainer({ data }) {
  return (
    <RowContainerBlock>
      <Slider data={data} />
    </RowContainerBlock>
  );
}

const RowContainerBlock = styled.div`
  position: relative;
  padding: 0 4%;
  padding: 0 60px;
`;

export default RowContainer;
