import styled from 'styled-components';
import color from '../../styles/colors';

export const FeaturedArtist = styled.div`
  height: 400px;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 25px;
  background-image: linear-gradient(${color.primaryGradient}, ${color.secondaryGradient}), url(${require('../../assets/images/featured/1.jpg')});
  background-position: center center;
`;