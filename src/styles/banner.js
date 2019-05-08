import styled from 'styled-components';
import imgBanner from '../assets/images/banner.png';
import Theme from './theme';

export const Banner = styled.div`
  height: 400px;
  padding-top: 100px;
  background-image: linear-gradient(${Theme.gradientPrimary}, ${Theme.gradientSecondary}), url(${imgBanner});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(50%);
`;
