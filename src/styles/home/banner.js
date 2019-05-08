import styled from 'styled-components';
import imgBanner from '../../assets/images/banner.jpg';
import color from '../../styles/colors';

export const Banner = styled.div`
  height: 400px;
  width: 100%;
  padding-top: 100px;
  background-image: linear-gradient(${color.primaryGradient}, ${color.secondaryGradient}), url(${imgBanner});
  background-position: center center;
`;