import styled from 'styled-components';
import Theme from '../theme';

export const FeaturedArtist = styled.div`
  height: 400px;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 25px;
  background-image: linear-gradient(${Theme.gradientPrimary}, ${Theme.gradientSecondary}), url(${require('../../assets/images/featured/1.jpg')});
  background-position: center center;
`;
