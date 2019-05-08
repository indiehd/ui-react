import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './assets/styles/App.css';
import { Layout } from 'antd';

import logoImg from './assets/images/logo.svg';

import { Logo } from './styles/app';
import Menu from './components/MainMenu';
import Crumbs from './components/Crumbs';

import Home from './views/Home';
import About from './views/About';

const {Header, Content, Footer} = Layout;

/* todo: Create styled components for the below */
const Styles = {
  Header: {
    paddingLeft: 190,
    paddingRight: 190
  },

  Content: {
    background: '#fff',
    padding: '25px 190px',
    minHeight: 500
  },
};

function App () {
  return (
    <div className="App">
      <Layout className="layout">
        <Router>
          <Header style={Styles.Header}>
            <Logo src={logoImg} alt={'logo'}/>
            <Menu/>
          </Header>
          <Content>
            <div style={Styles.Content}>
              <Crumbs/>

              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
            </div>
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
