import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LoginFormMain from './LoginFormMain';

function Login() {
  return (
    <LoginBlock role="login">
      {/* Header */}
      <LoginHeader>
        <LoginLogo to="/">NEXToon</LoginLogo>
      </LoginHeader>
      {/* Body */}
      <LoginBody>
        <LoginForm>
          <LoginFormMain />
        </LoginForm>
      </LoginBody>
      {/* Footer */}
      <LoginFooter></LoginFooter>
    </LoginBlock>
  );
}

const LoginBlock = styled.div``;

const LoginHeader = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  width: 100%;
  height: 80px;
`;

const LoginLogo = styled(Link)`
  margin-left: 4%;
  text-decoration: none;
  font-weight: bold;
  font-size: 2.5rem;
  color: red;
`;

const LoginBody = styled.div`
  margin: 0 auto -240px;
  min-height: 100vh;
  max-width: 450px;

  ::before {
    content: '';
    height: 80px;
    display: block;
  }
`;

const LoginForm = styled.div`
  min-height: 620px;
  padding: 60px 68px 40px;
  margin-bottom: 80px;
  background-color: rgba(0, 0, 0, 0.75);
`;

// const LoginFormOther = styled.div``;

const LoginFooter = styled.div``;

export default Login;
