import React, { Component } from 'react';
import { Row, Col } from 'antd';

import { H1, H3 } from '../styles/core';

import Banner from '../components/Banner';
import FeaturedFeed from '../components/FeaturedFeed';

/*
todo: Create components
Title component
Subtitle component
*/
class Home extends Component {

  render () {
    return (
      <div>
        <Row gutter={16}>
          <Col style={{textAlign: 'center'}} className="gutter-row" span={24}>
            <Banner>
              <H1 style={{color: '#060606', fontWeight: 'bold'}}>The IndieHD Project</H1>
              <H3 style={{color: '#1c1c1c', fontWeight: 'bold'}}>A simple, do-it-yourself platform for selling their
                music to fans, digitally.</H3>
            </Banner>
          </Col>
        </Row>

        <FeaturedFeed/>
      </div>
    );
  }
}

export default Home;
