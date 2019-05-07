import React, { Component } from 'react';
import { Button as AntdButton } from 'antd';
import PropTypes from 'prop-types';

class Button extends Component {
  static defaultProps = {
    color: '#6D15A1',
    textColor: '#fff'
  };

  static propTypes = {
    value: PropTypes.string.isRequired,
    color: PropTypes.string
  };

  render () {
    const {style, color, textColor, value, ...restProps} = this.props;

    const styles = {
      backgroundColor: color,
      borderColor: color,
      color: textColor,
      ...style
    };

    return (
      <AntdButton style={styles}  {...restProps}>
        {value}
      </AntdButton>
    );
  }
}

export default Button;
