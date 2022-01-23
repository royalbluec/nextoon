import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LogoutContainer from './LogoutContainer';

function Logout() {
  return (
    <LogoutBlock>
      <LogoutHeader>
        <LogoutLogo to="/">NEXToon</LogoutLogo>
        <LogoutLoginLink to="/login">로그인</LogoutLoginLink>
      </LogoutHeader>
      <LogoutBody>
        <LogoutContainer />
      </LogoutBody>
    </LogoutBlock>
  );
}

const LogoutBlock = styled.div``;

const LogoutHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 0 4%;
  box-sizing: border-box;
`;

const LogoutLogo = styled(Link)`
  color: red;
  font-size: 2.5rem;
  font-weight: bold;
  text-decoration: none;
`;

const LogoutLoginLink = styled(Link)`
  color: #fff;
  background-color: #e50914;
  padding: 8px 20px;
  border-radius: 4px;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    background-color: #f40612;
  }
`;

const LogoutBody = styled.div`
  margin: 0 auto -240px;
  min-height: 100vh;
  max-width: 450px;

  ::before {
    content: '';
    height: 80px;
    display: block;
  }
`;

export default Logout;
