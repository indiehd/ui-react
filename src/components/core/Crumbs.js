import React, { Component } from 'react';
import { Breadcrumb } from 'antd/lib/index';

class Crumbs extends Component {
  render () {
    return (
      <div className="Crumbs">
        <Breadcrumb style={{margin: '16px 0'}}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

export default Crumbs;
