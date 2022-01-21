import styled from 'styled-components';

import PrimaryNav from './PrimaryNav';
import SecondaryNav from './SecondaryNav';

function Header() {
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
  height: 60px;
  padding: 0 60px;
  background-color: black;
`;

export default Header;
