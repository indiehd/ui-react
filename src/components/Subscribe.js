import React, { Component } from 'react';
import { Col, Row, Input, Typography } from 'antd';
import Theme from '../styles/theme';

const {Title, Text} = Typography;

class Subscribe extends Component {
  render () {
    const {...restProps} = this.props;

    return (
      <div>
        <Row {...restProps}>
          <Col style={{backgroundColor: Theme.info, width: '100%', height: 250}} span={12}>
            <Row>
              <Col span={12} offset={6} style={{textAlign: 'center', padding: 25}}>
                <Title>
                  <Text strong style={{color: Theme.primary}}>
                    Subscribe
                  </Text>
                </Title>
                <Text style={{fontSize: 18}}>
                  Enter your email address to subscribe to our newsletter
                  and receive notifications by email.
                </Text>
              </Col>
              <Col span={12} offset={6}>
                <Input placeholder="Email Address"/>
              </Col>
              <Col span={12} offset={6} style={{textAlign: 'center'}}>
                <Text style={{color: Theme.disabled}}>
                  * indieHD LLC will never share your email with any 3rd party *
                </Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Subscribe;