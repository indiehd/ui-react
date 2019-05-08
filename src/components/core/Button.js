import React, { Component } from 'react';
import { Button as AntdButton } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Button extends Component {
  static defaultProps = {
    color: '#6D15A1',
    textColor: '#fff'
  };

  static propTypes = {
    color: PropTypes.string,
    textColor: PropTypes.string
  };

  render () {
    const {color, textColor, children, ...restProps} = this.props;

    const StyledButton = styled(AntdButton)`
      color: ${textColor};
      background-color: ${color};
      border-color: ${color};
    `;

    return (
      <StyledButton {...restProps}>
        {children}
      </StyledButton>
    );
  }
}

export default Button;
