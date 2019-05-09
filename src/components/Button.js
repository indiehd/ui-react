import React, { Component } from 'react';
import { Button as AntdButton } from 'antd/lib/index';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Theme from '../styles/theme';

class Button extends Component {
  static defaultProps = {
    color: Theme.primary,
    textColor: Theme.white,
  };

  static propTypes = {
    color: PropTypes.string,
    textColor: PropTypes.string
  };

  render () {
    const {color, textColor, children, ...restProps} = this.props;

    const StyledButton = styled(AntdButton)`
      color: ${textColor} !important;
      background-color: ${color} !important;
      border-color: ${color} !important;
      
      &:hover {
        color: ${Theme.primary} !important;
        background-color: ${Theme.white} !important;
        border-color: ${Theme.primary} !important;
      }
    `;

    return (
      <StyledButton {...restProps}>
        {children}
      </StyledButton>
    );
  }
}

export default Button;
