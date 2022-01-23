import styled from 'styled-components';

import useWindowDimensions from '../../hooks/useWindowDimensions';

function Banner() {
  const { width } = useWindowDimensions();

  return (
    <div role="banner">
      <BannerImg alt="banner" src="img/banner.png" $width={width} />
    </div>
  );
}

const BannerImg = styled.img`
  position: absolute;
  width: ${(props) => props.$width}px;
  object-fit: cover;
  z-index: -1;
`;

export default Banner;
