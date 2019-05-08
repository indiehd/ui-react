import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Styles = {
  Menu: {lineHeight: '64px'},
};

class MainMenu extends Component {
  render () {
    return (
      <div className="Menu">
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={Styles.Menu}
        >
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <SubMenu title={<span className="submenu-title-wrapper">Music <Icon type="down"/></span>}>
            <MenuItemGroup title="Browse">
              <Menu.Item key="music:1">Most Popular</Menu.Item>
              <Menu.Item key="music:2">Trending</Menu.Item>
              <Menu.Item key="music:3">Recently Added</Menu.Item>
              <Menu.Item key="music:4">On Sale</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Type">
              <Menu.Item key="music:5">Artists</Menu.Item>
              <Menu.Item key="music:6">Albums</Menu.Item>
              <Menu.Item key="music:7">Labels</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Popular Genres">
              <Menu.Item key="music:8">Electronic</Menu.Item>
              <Menu.Item key="music:9">Ambient</Menu.Item>
              <Menu.Item key="music:10">Rock</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key="2">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="3">Help</Menu.Item>
        </Menu>
      </div>
    );
  };
}

export default MainMenu;
