import React, { Component } from 'react';
import { Row, Col } from 'antd';

import Button from '../components/core/Button';

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

    return (
      <div>
        <Row gutter={16}>
          {
            this.state.featuredArtists.map(artist => {
              const num = Math.floor(Math.random() * Math.floor(9)) + 1;

              const StyledFeatured = {
                height: 400,
                width: '100%',
                marginTop: 8,
                marginBottom: 8,
                padding: 25,
                backgroundImage: `linear-gradient(rgba(230, 100, 101, 0.5), rgba(145, 152, 229, 0.5)), url(${require(`../assets/images/featured/${num}.jpg`)})`,
                backgroundPosition: `center center`,
              };

              return (
                <Col key={artist.id} style={{textAlign: 'center'}} className="gutter-row" span={12}>
                  <div style={StyledFeatured}>
                    <h1 style={{color: 'white', fontSize: 48}}>{artist.moniker}</h1>
                    <Row>
                      <Col span={12} offset={6}>

                        <Button
                          color="#30ADED"
                          value={`View ${artist.albums} Albums`}
                          style={{marginRight: 10}}
                          shape="round"
                          size="large"
                        />

                        <Button
                          value={`View ${artist.songs} Songs`}
                          shape="round"
                          size="large"
                        />

                      </Col>
                    </Row>
                  </div>
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
