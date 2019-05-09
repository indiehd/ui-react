import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';

import styled from 'styled-components';
import './styles/_App.css';

import logoImg from './assets/images/logo.svg';
import Menu from './components/core/MainMenu';
import Crumbs from './components/core/Crumbs';

import Home from './views/Home';
import About from './views/About';

const {Header, Content, Footer} = Layout;

const Logo = styled.img`
  width: 150px;
  height: 31px;
  margin: 16px 24px 16px 0;
  float: left;
`;

const ContentWrapper = styled(Content)`
  background: #fff;
  padding: 25px 190px;
  min-height: 500px;
`;

function App () {
  return (
    <div className="App">
      <Layout className="layout">
        <Router>
          <Header style={{paddingLeft: 190, paddingRight: 190}}>
            <Logo src={logoImg} alt="logo"/>
            <Menu/>
          </Header>
          <Content>
            <ContentWrapper>
              <Crumbs/>

              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
            </ContentWrapper>
          </Content>
          <Footer style={{textAlign: 'center'}}>
            indieHD LLC © 2008 - 2019
          </Footer>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
