import React, { Component } from 'react';
import { Row, Col, Typography } from 'antd/lib/index';
import styled from 'styled-components';

import Theme from '../../styles/theme';
import Button from '../Button';

const {Title, Text} = Typography;

const Background = styled.div`
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Content = styled.div`
  background-color: rgba(0,0,0,0.7);
  color: white;
  font-weight: bold;
  position: relative;
  width: 100%;
  height: 80px;
  min-height: 80px;
  max-height: 80px;
  top: 50px;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 20px;
  text-align: center;
`;

class Featured extends Component {
  state = {
    featured: [
      /* Temporary data to play with */
      {id: 1, moniker: 'Bens Band Of fo0lz', albums: 25, songs: 104, url: 'bens_band_of_fo0lz'},
      {id: 2, moniker: 'Mikes Band', albums: 7, songs: 53, url: 'mikes_band'},
      {id: 3, moniker: 'Veks Crazied Eye Candies', albums: 5, songs: 26, url: 'veks_crazied_eye_candies'},
    ]
  };

  render () {
    const artists = this.state.featured;

    return (
      <div>
        <Row gutter={16}>
          {
            artists.map(artist => {
              const num = Math.floor(Math.random() * Math.floor(9)) + 1;

              const BackgroundImage = styled(Background)`
                background-image: url(${require(`../../assets/images/featured/${num}.jpg`)});
              `;

              return (
                <Col key={artist.id} style={{marginTop: 8, marginBottom: 8}} className="gutter-row" span={8}>
                  <BackgroundImage>
                    <Content>
                      <Title level={2}>
                        <Text strong style={{color: Theme.white}}>
                          {artist.moniker}
                        </Text>
                      </Title>
                    </Content>

                    <Row>
                      <Col span={24} offset={6}>

                        <Button
                          style={{marginRight: 10}}
                          shape="round"
                          size="large"
                        >{artist.albums + ' Albums'}</Button>

                        <Button
                          color={Theme.secondary}
                          shape="round"
                          size="large"
                        >{artist.songs + ' Songs'}</Button>

                      </Col>
                    </Row>
                  </BackgroundImage>

                </Col>
              );
            })
          }
        </Row>
      </div>
    );
  }
}

export default Featured;
