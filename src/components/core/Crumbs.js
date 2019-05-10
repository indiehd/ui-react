import React, { Component } from 'react';
import { Breadcrumb, Icon } from 'antd';

class Crumbs extends Component {
  render () {
    return (
      <div className="Crumbs">
        <Breadcrumb style={{marginBottom: 25}}>
          <Breadcrumb.Item href="">
            <Icon style={{fontSize: 18}} type="home"/>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

export default Crumbs;
