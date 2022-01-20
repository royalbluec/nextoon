import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderBlock role="header">
      <NavBlock role="primary-navigation">
        <NavLogo role="logo" to="/">
          NEXToon
        </NavLogo>
        <NavList>
          <NavItem>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#e5e5e5',
                fontWeight: isActive ? 'bold' : '',
              })}
            >
              홈
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/webtoon"
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#e5e5e5',
                fontWeight: isActive ? 'bold' : '',
              })}
            >
              웹툰
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/manga"
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#e5e5e5',
                fontWeight: isActive ? 'bold' : '',
              })}
            >
              일본만화
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/novel"
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#e5e5e5',
                fontWeight: isActive ? 'bold' : '',
              })}
            >
              소설
            </NavLink>
          </NavItem>
        </NavList>
      </NavBlock>
      <NavBlock role="secondary-navigation">
        <NavElement></NavElement>
        <NavElement></NavElement>
        <NavElement></NavElement>
      </NavBlock>
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

const NavBlock = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLogo = styled(Link)`
  margin-right: 20px;
  font-size: 1.6rem;
  color: red;
  text-decoration: none;
`;

const NavList = styled.ul`
  display: flex;
  padding: 0px;
`;

const NavItem = styled.li`
  list-style: none;

  a {
    margin-left: 20px;
    font-size: 0.8rem;
    color: #e5e5e5;
    text-decoration: none;

    :hover {
      color: #b3b3b3;
    }

    &.active {
      color: red;
    }
  }
`;

const NavElement = styled.div``;

export default Header;
