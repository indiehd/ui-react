import React, { Component } from 'react';
import { Row, Col, Typography } from 'antd';
import styled from 'styled-components';

import { H1 } from '../styles/core';
import { FeaturedArtist } from '../styles/home';

import Button from '../components/core/Button';

const {Title, Text} = Typography;

class FeaturedFeed extends Component {
  constructor (props) {
    super(props);
    this.state = {
      featuredArtists: [
        /* Temporary data to play with */
        {id: 1, moniker: 'Bens Band Of fo0lz', albums: 25, songs: 104, url: 'bens_band_of_fo0lz'},
        {id: 2, moniker: 'Mikes Band', albums: 7, songs: 53, url: 'mikes_band'},
        {id: 3, moniker: 'Veks Crazied Eye Candies', albums: 5, songs: 26, url: 'veks_crazied_eye_candies'},
        {id: 4, moniker: 'Johns Band Of fo0lz', albums: 3, songs: 16, url: 'johns_band_of_fo0lz'},
        {id: 5, moniker: 'John Doe\'s Basement Boys', albums: 15, songs: 56, url: 'john_does_basement_boys'},
        {id: 6, moniker: 'K0rn', albums: 35, songs: 326, url: 'k0rn'},
      ]
    };
  }

  render () {
    const artists = this.state.featuredArtists;

    return (
      <div>
        <Row gutter={16}>
          {
            artists.map(artist => {
              const num = Math.floor(Math.random() * Math.floor(9)) + 1;

              const Featured = styled(FeaturedArtist)`
                background-image: linear-gradient(rgba(230, 100, 101, 0.5), rgba(145, 152, 229, 0.5)), url(${require(`../assets/images/featured/${num}.jpg`)});
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
                      <Col span={12} offset={6}>

                        <Button
                          color="#30ADED"
                          style={{marginRight: 10}}
                          shape="round"
                          size="large"
                        >{`${artist.albums} Albums`}</Button>

                        <Button
                          shape="round"
                          size="large"
                        >{`${artist.songs} Songs`}</Button>

                      </Col>
                    </Row>
                  </Featured>
                </Col>
              );
            })
          }
        </Row>
      </div>
    );
  }
}

export default FeaturedFeed;
