import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';

import styled from 'styled-components';
import './styles/_App.css';
import Theme from './styles/theme';

import logoImg from './assets/images/logo.svg';
import SideMenu from './components/core/SideMenu';
import Crumbs from './components/core/Crumbs';

import Home from './views/Home';
import About from './views/About';

const {Header, Content, Footer} = Layout;

const Logo = styled.img`
  width: 150px;
  height: 31px;
  margin-top: 16px;
  float: left;
`;

const ContentWrapper = styled(Content)`
  background: #fff;
  padding: 25px;
  min-height: 500px;
`;

function App () {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Header>
            <Logo src={logoImg} alt="logo"/>
          </Header>

          <Layout>
            <SideMenu width={250}/>

            <Layout style={{background: Theme.white}}>
              <Content>
                <ContentWrapper>
                  <Crumbs/>

                  <Route exact path="/" component={Home}/>
                  <Route path="/about" component={About}/>
                </ContentWrapper>
              </Content>
            </Layout>
          </Layout>

          <Footer style={{textAlign: 'center'}}>
            indieHD LLC © 2008 - 2019
          </Footer>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
