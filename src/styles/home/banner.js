import styled from 'styled-components';
import imgBanner from '../../assets/images/banner.jpg';
import Theme from '../theme';

export const Banner = styled.div`
  height: 400px;
  width: 100%;
  padding-top: 100px;
  background-image: linear-gradient(${Theme.gradientPrimary}, ${Theme.gradientSecondary}), url(${imgBanner});
  background-position: center center;
`;
