import { FaSearch, FaBell, FaUser, FaCaretDown } from 'react-icons/fa';
import styled from 'styled-components';

function SecondaryNav() {
  return (
    <NavBlock role="secondary-navigation">
      <NavElement>
        <IconSearch />
      </NavElement>
      <NavElement>
        <IconBell />
      </NavElement>
      <NavElement>
        <IconUser />
        <IconCaretDown />
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

const IconSearch = styled(FaSearch)`
  width: 20px;
  height: 20px;
  color: white;

  :hover {
    cursor: pointer;
  }
`;

const IconBell = styled(FaBell)`
  width: 20px;
  height: 20px;
  color: white;

  :hover {
    cursor: pointer;
  }
`;

const IconUser = styled(FaUser)`
  width: 20px;
  height: 20px;
  color: white;

  :hover {
    cursor: pointer;
  }
`;

const IconCaretDown = styled(FaCaretDown)`
  width: 16px;
  height: 16x;
  margin-left: 10px;
  color: white;

  :hover {
    cursor: pointer;
    transform: rotate(180deg);
    transition-duration: 0.4s;
  }
`;

export default SecondaryNav;
