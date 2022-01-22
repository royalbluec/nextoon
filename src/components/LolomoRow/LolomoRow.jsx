import styled from 'styled-components';

import RowHeader from './RowHeader';
import RowContainer from './RowContainer';

function LolomoRow({ data }) {
  return (
    <LolomoRowBlock role="lolomoRow">
      <RowHeader />
      <RowContainer data={data} />
    </LolomoRowBlock>
  );
}

const LolomoRowBlock = styled.div`
  margin: 3vw 0;
`;

export default LolomoRow;
