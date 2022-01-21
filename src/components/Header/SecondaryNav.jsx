import { useState } from 'react';
import { FaBell, FaUser, FaCaretDown } from 'react-icons/fa';
import styled from 'styled-components';

import SearchBox from './SearchBox';

function SecondaryNav() {
  const [isBellClicked, setIsBellClicked] = useState(false);

  const clickBell = () => {
    console.log('bell');
  };

  return (
    <NavBlock role="secondary-navigation">
      <NavElement>
        <SearchBox />
      </NavElement>
      <NavElement>
        <BellIcon onClick={clickBell} />
      </NavElement>
      <NavElement>
        <UserIcon />
        <CaretDownIcon />
      </NavElement>
    </NavBlock>
  );
}

const NavBlock = styled.nav`
  display: flex;
  align-items: center;
`;

const NavElement = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  &:last-child {
    margin: 0;
  }
`;

const BellIcon = styled(FaBell)`
  width: 20px;
  height: 20px;
  color: white;

  :hover {
    cursor: pointer;
  }
`;

const UserIcon = styled(FaUser)`
  width: 20px;
  height: 20px;
  color: white;

  :hover {
    cursor: pointer;
  }
`;

const CaretDownIcon = styled(FaCaretDown)`
  width: 16px;
  height: 16x;
  margin-left: 10px;
  color: white;

  :hover {
    cursor: pointer;
    transform: rotate(180deg);
    transition: 0.4s ease all;
  }
`;

export default SecondaryNav;
