import React, { Component } from 'react';
import { Banner as StyledBanner } from '../styles/banner';

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
