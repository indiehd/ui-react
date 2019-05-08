import styled from 'styled-components';
import Theme from './theme';

export const Background = styled.div`
  height: 400px;
  background-image: linear-gradient(${Theme.gradientPrimary}, ${Theme.gradientSecondary}), url(${require('../assets/images/featured/1.jpg')});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(50%);
`;

export const Content = styled.div`
  background-color: rgba(0,0,0,0.7);
    color: white;
    font-weight: bold;
    position: relative;
    width: 100%;
    height: 80px;
    min-height: 80px;
    max-height: 80px;
    top: 50px;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 20px;
    text-align: center;
`;
