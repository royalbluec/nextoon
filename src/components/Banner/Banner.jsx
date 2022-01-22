import styled from 'styled-components';

function Banner() {
  return (
    <div role="banner">
      {/* <BannerImg alt="banner" src="img/banner.png" /> */}
    </div>
  );
}

const BannerImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default Banner;
