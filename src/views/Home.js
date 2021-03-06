import React, { Component } from 'react';
import { Row, Col, Typography } from 'antd';
import Theme from '../styles/theme';

import Banner from '../components/home/Banner';
import Featured from '../components/home/Featured';
import Button from '../components/Button';
import Subscribe from '../components/home/Subscribe';

const {Title, Text} = Typography;

class Home extends Component {

  render () {
    return (
      <div>
        <Row gutter={16}>
          <Col style={{textAlign: 'center'}} className="gutter-row" span={24}>
            <Banner>
              <Title>
                <Text strong style={{color: Theme.white}}>The IndieHD Project</Text>
              </Title>

              <Title level={2}>
                <Text strong style={{color: Theme.white}}>
                  A simple, do-it-yourself platform for selling your music to fans, digitally.
                </Text>
              </Title>

              <Row>
                <Col span={12} offset={6}>

                  <Button
                    style={{marginRight: 10}}
                    shape="round"
                    size="large"
                  >Start Selling</Button>

                  <Button
                    color={Theme.link}
                    shape="round"
                    size="large"
                  >Learn More</Button>

                </Col>
              </Row>
            </Banner>
          </Col>
        </Row>

        <Subscribe style={{marginTop: 8}}/>

        <Featured/>
      </div>
    );
  }
}

export default Home;
