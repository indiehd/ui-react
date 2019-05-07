import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

const Styles = {
  Breadcrumb: {margin: '16px 0'},
};

class Crumbs extends Component {
  render () {
    return (
      <div className="Crumbs">
        <Breadcrumb style={Styles.Breadcrumb}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

export default Crumbs;
