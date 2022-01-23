import styled from 'styled-components';

import PrimaryNav from './PrimaryNav';
import SecondaryNav from './SecondaryNav';

function Header() {
  // scroll 체크 해서 배경 색 바꾸기

  return (
    <HeaderBlock role="header">
      <PrimaryNav />
      <SecondaryNav />
    </HeaderBlock>
  );
}

const HeaderBlock = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  height: 60px;
  padding: 0 60px;
  background-color: transparent;
  // background-color: #141414;
  box-sizing: border-box;
  z-index: 999;
`;

export default Header;
