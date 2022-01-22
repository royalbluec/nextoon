import styled from 'styled-components';

function PageIndicator({ totalPageNumber, pageNumber }) {
  return (
    <PageIndicatorBlock>
      {totalPageNumber.map((el, i) =>
        pageNumber === i ? (
          <ActiveIndicator key={i}></ActiveIndicator>
        ) : (
          <Indicator key={i}></Indicator>
        )
      )}
    </PageIndicatorBlock>
  );
}

const PageIndicatorBlock = styled.ul`
  display: flex;
  position: absolute;
  right: 62px;
  margin: -12px 0 12px 0;
  padding: 0;
  list-style-type: none;
`;

const Indicator = styled.li`
  width: 12px;
  height: 2px;
  margin-left: 1px;
  background: #4d4d4d;
`;

const ActiveIndicator = styled.li`
  width: 12px;
  height: 2px;
  margin-left: 1px;
  background: #aaa; ;
`;

export default PageIndicator;
