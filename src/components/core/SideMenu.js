import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Menu, Layout } from 'antd';
import styled from 'styled-components';
import { lighten } from 'polished';

import Theme from '../../styles/theme';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const {Sider} = Layout;

class SideMenu extends Component {
  static defaultProps = {
    width: 300,
    color: Theme.primary,
    textColor: Theme.white,
    hoverColor: Theme.white,
    hoverTextColor: Theme.accentPrimary
  };

  static propTypes = {
    width: PropTypes.number,
    color: PropTypes.string,
    textColor: PropTypes.string,
    hoverColor: PropTypes.string,
    hoverTextColor: PropTypes.string
  };

  render () {
    const {width, color, textColor, hoverColor, hoverTextColor, ...restProps} = this.props;

    const StyledMenu = styled(Menu)`
      line-height: 64px; 
      border-right: 0;
      height: 100%;
      background: ${color};
      
      .ant-menu-item-group-title {
        color: ${Theme.light};
      }
      
      .ant-menu-item-selected {
        background-color: ${hoverColor} !important; // todo: why ??
      }
      
      .ant-menu-item, 
      .ant-menu-submenu-title, 
      .ant-menu-item > a {
        color: ${textColor};
      }
      
      .ant-menu-item-selected::after {
        border: 1px solid ${hoverTextColor};
      }
      
      .ant-menu-item:hover, 
      .ant-menu-submenu-title:hover {
        color: ${hoverTextColor};
        background: ${hoverColor};
        
        a {
          color: ${hoverTextColor};
        }
      }
      
      .ant-menu-submenu > .ant-menu {
        background-color: ${lighten(0.05, color)};
      }
      
      .ant-menu-submenu-selected, 
      .ant-menu-item-selected > a {
        color: ${hoverTextColor};
      }
     
    `;

    return (
      <div style={{background: color}}>
        <Sider width={width}>
          <StyledMenu
            mode="inline"
            defaultSelectedKeys={['home']}
            {...restProps}
          >
            <Menu.Item key="home">
              <Link to="/">Home</Link>
            </Menu.Item>
            <SubMenu title={<span className="submenu-title-wrapper">Music</span>}>
              <MenuItemGroup title="Browse">
                <Menu.Item key="browse:most-popular">
                  <Link to="/browse/most-popular">Most Popular</Link>
                </Menu.Item>
                <Menu.Item key="browse:trending">
                  <Link to="/browse/trending">Trending</Link>
                </Menu.Item>
                <Menu.Item key="browse:most-recent">
                  <Link to="/browse/most-recent">Most Recent</Link>
                </Menu.Item>
                <Menu.Item key="browse:on-sale">
                  <Link to="/browse/on-sale">On Sale</Link>
                </Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="Type">
                <Menu.Item key="browse:artists">
                  <Link to="/browse/artists">Artists</Link>
                </Menu.Item>
                <Menu.Item key="browse:albums">
                  <Link to="/browse/albums">Albums</Link>
                </Menu.Item>
                <Menu.Item key="browse:labels">
                  <Link to="/browse/labels">Labels</Link>
                </Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="Popular Genres">
                <Menu.Item key="browse:electronic">
                  <Link to="/browse/labels">Electronic</Link>
                </Menu.Item>
                <Menu.Item key="browse:ambient">
                  <Link to="/browse/labels">Ambient</Link>
                </Menu.Item>
                <Menu.Item key="browse:rock">
                  <Link to="/browse/labels">Rock</Link>
                </Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <Menu.Item key="about">
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="help">
              <Link to="/help">Help</Link>
            </Menu.Item>
          </StyledMenu>
        </Sider>
      </div>
    );
  };
}

export default SideMenu;
