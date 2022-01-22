import styled from 'styled-components';

function RowHeader() {
  return (
    <RowHeaderBlock>
      <RowTitle>RowHeader</RowTitle>
    </RowHeaderBlock>
  );
}

const RowHeaderBlock = styled.div`
  margin: 0 4% 0.5em 4%;
  margin-left: 60px;
`;

const RowTitle = styled.h2`
  margin: 0;
`;

export default RowHeader;
