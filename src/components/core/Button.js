import React, { Component } from 'react';
import { Button as AntdButton } from 'antd';
import PropTypes from 'prop-types';

class Button extends Component {
  static defaultProps = {
    color: '#6D15A1'
  };

  static propTypes = {
    value: PropTypes.string.isRequired,
    color: PropTypes.string
  };

  render () {
    const { color, value, ...restProps } = this.props;

    return (
      <AntdButton style={{
        backgroundColor: color,
        borderColor: color
      }}  {...restProps}>
        {value}
      </AntdButton>
    );
  }
}

export default Button;
