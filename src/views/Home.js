import React, { Component } from 'react';
import { Row, Col } from 'antd';

import imgBanner from '../assets/images/banner.jpg';

import Featured from '../components/FeaturedFeed';

const Styles = {
  GutterRow: {
    textAlign: 'center'
  },

  Banner: {
    height: 400,
    width: '100%',
    backgroundImage: `linear-gradient(rgba(230, 100, 101, 0.5), rgba(145, 152, 229, 0.5)), url(${imgBanner})`,
    backgroundPosition: `center center`
  },

};

class Home extends Component {

  render () {
    return (
      <div>
        <Row gutter={16}>
          <Col style={Styles.GutterRow} className="gutter-row" span={24}>
            <div style={Styles.Banner}>
              <h1>Test</h1>
            </div>
          </Col>
        </Row>

        <Featured />
      </div>
    );
  }
}

export default Home;
