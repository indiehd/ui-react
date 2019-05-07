import React from 'react';
import './assets/styles/App.css';
import { Layout } from 'antd';

import logo from './assets/images/logo.svg';
import Menu from './components/MainMenu';
import Crumbs from './components/Crumbs';

import Home from './views/Home'

const {Header, Content, Footer} = Layout;

const Styles = {
  Logo: {
    width: 150,
    height: 31,
    margin: '16px 24px 16px 0',
    float: 'left',
  },

  Header: {
    paddingLeft: 190,
    paddingRight: 190
  },

  Content: {
    background: '#fff',
    padding: '25px 190px',
    minHeight: 500
  },

  Footer: {textAlign: 'center'},
};

function App () {
  return (
    <div className="App">
      <Layout className="layout">
        <Header style={Styles.Header}>
          <img style={Styles.Logo} src={logo} alt={'logo'}/>
          <Menu/>
        </Header>
        <Content>
          <div style={Styles.Content}>
            <Crumbs/>
            {/*  todo: Dynamic page view ? */}
            <Home/>
          </div>
        </Content>
        <Footer style={Styles.Footer}>
          indieHD LLC © 2008 - 2019
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
