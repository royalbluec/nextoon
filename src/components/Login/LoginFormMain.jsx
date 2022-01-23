import { useRef, useState } from 'react';
import styled from 'styled-components';

function LoginFormMain() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocusEmail, setIsFocusEmail] = useState(false);
  const [isFocusPassword, setIsFocusPassword] = useState(false);
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorPassword, setIsErrorPassword] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const focusEmail = () => {
    setIsFocusEmail(true);
  };

  const blurEmail = () => {
    !emailRef.current.value && setIsFocusEmail(false);
    // error 문구 발생
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
    // error 있을때 error 문구 제거
  };

  const focusPassword = () => {
    setIsFocusPassword(true);
  };

  const blurPassword = () => {
    !passwordRef.current.value && setIsFocusPassword(false);
    // error 문구 발생
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
    // error 있을때 error 문구 제거
  };

  const clickButton = (e) => {
    e.preventDefault();
  };

  return (
    <LoginFormMainBlock>
      <Title>Login</Title>
      <ErrorMessage>
        죄송합니다. 이 이메일 주소를 사용하는 계정을 찾을 수 없습니다. 다시
        시도하시거나 <a>새로운 계정을 등록</a>하세요.
      </ErrorMessage>
      <ErrorMessage>
        <b>비밀번호를 잘못 입력하셨습니다.</b> 다시 입력하시거나{' '}
        <a>비밀번호를 재설정</a>하세요.
      </ErrorMessage>
      <Form>
        <InputContainer>
          <Input
            id="email"
            type="email"
            ref={emailRef}
            onFocus={focusEmail}
            onBlur={blurEmail}
            onChange={changeEmail}
          />
          <EmailLabel htmlFor="email" $isFocusEmail={isFocusEmail}>
            이메일 주소
          </EmailLabel>
          <InputError>정확한 이메일 주소를 입력하세요.</InputError>
        </InputContainer>
        <InputContainer>
          <Input
            id="password"
            type="password"
            ref={passwordRef}
            onFocus={focusPassword}
            onBlur={blurPassword}
            onChange={changePassword}
          />
          {/* 표시, 숨기기 추가 */}
          <PasswordLabel htmlFor="password" $isFocusPassword={isFocusPassword}>
            비밀번호
          </PasswordLabel>
          <InputError>비밀번호는 4 - 60자 사이여야 합니다.</InputError>
        </InputContainer>
        <Button onClick={clickButton}>로그인</Button>
      </Form>
    </LoginFormMainBlock>
  );
}

const LoginFormMainBlock = styled.div`
  color: white;
`;

const Title = styled.h1`
  margin: 0 0 28px 0;
`;

const ErrorMessage = styled.div`
  margin: 0 0 16px;
  padding: 12px 20px;
  border-radius: 4px;
  background: #e87c03;
  font-size: 12px;

  a {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Form = styled.form``;

const InputContainer = styled.div`
  position: relative;
  padding-bottom: 16px;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 16px 20px 0;
  border: 0;
  border-radius: 4px;
  outline: none;
  background: #333;
  color: white;
  box-sizing: border-box;

  &:focus {
    background: #454545;
  }
`;

const EmailLabel = styled.label`
  position: absolute;
  left: 20px;
  color: #8c8c8c;
  top: ${(props) => (props.$isFocusEmail ? '8px' : '16px')};
  font-size: ${(props) => (props.$isFocusEmail ? '12px' : '16px')};
  transition: all 0.2s ease;
`;

const PasswordLabel = styled.label`
  position: absolute;
  left: 20px;
  color: #8c8c8c;
  top: ${(props) => (props.$isFocusPassword ? '8px' : '16px')};
  font-size: ${(props) => (props.$isFocusPassword ? '12px' : '16px')};
  transition: all 0.2s ease;
`;

const InputError = styled.div`
  color: #e87c03;
  font-size: 12px;
  margin-bottom: -8px;
  padding: 4px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 24px 0 12px;
  border: none;
  border-radius: 4px;
  background: #e50914;
  color: white;
  font-size: 16px;
  font-weight: bold;

  :hover {
    cursor: pointer;
  }
`;

export default LoginFormMain;
