import React, { Component } from 'react';
import styled from 'styled-components';
import Theme from '../../styles/theme';
import imgBanner from '../../assets/images/banner.png';

const StyledBanner = styled.div`
  height: 400px;
  padding-top: 100px;
  background-image: linear-gradient(${Theme.gradientPrimary}, ${Theme.gradientSecondary}), url(${imgBanner});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(50%);
`;

class Banner extends Component {
  render () {
    const {children, ...restProps} = this.props;
    return (
      <StyledBanner {...restProps}>
        {children}
      </StyledBanner>
    );
  }
}

export default Banner;
