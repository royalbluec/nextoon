import { Link } from 'react-router-dom';
import styled from 'styled-components';

function LogoutContainer() {
  // 30초 후에 메인페이지로 이동하는 로직 짜기

  return (
    <LogoutContainerBlock>
      <Title>벌써 나가시려고요?</Title>
      <Text>
        참고로 알려드리면, 매번 Netflix에서 로그아웃하실 필요는 없습니다. 공용
        컴퓨터에서 이용한 경우에만 로그아웃하시면 됩니다.
      </Text>
      <Text>30초 후 메인페이지로 이동합니다.</Text>
      <Button to="/">지금 이동</Button>
    </LogoutContainerBlock>
  );
}

const LogoutContainerBlock = styled.div`
  background-color: #fafafa;
  padding: 32px 40px;
  color: #333;
  margin: 20px auto 0;
`;

const Title = styled.h1`
  margin: 0 0 20px 0;
`;

const Text = styled.p``;

const Button = styled(Link)`
  display: block;
  color: white;
  text-align: center;
  font-size: 20px;
  background: #0080ff;
  border-radius: 2px;
  padding: 10px 0;
  margin: 10px 0;
  text-decoration: none;

  :hover {
    background: #2490fd;
  }
`;

export default LogoutContainer;
