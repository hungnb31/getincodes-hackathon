import React from 'react'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Dropdown } from 'antd'
import 'antd/lib/menu/style/index.css'
import 'antd/lib/dropdown/style/index.css'

import {
  HeaderContainer,
  HeaderMenu,
  LogoWrapper,
  UserMenu,
  UserAvatar,
  NotiIcon
} from './Header.styled'
import logo from '../../assets/logo.svg'
import noti from '../../assets/noti.svg'
import avatar from '../../assets/images/user-avatar.png'

const CustomLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.active ? '#38C9BD' : 'black'};
  margin-left: 30px;
  font-weight: ${props => props.active && 'bold'};
  font-family: sans-serif;
`

const CustomMenu = styled(Menu)`
  .ant-dropdown-menu-item:hover, .ant-dropdown-menu-submenu-title:hover {
    background-color: #BFF2EE;
  }
`

const menu = (
  <CustomMenu>
    <Menu.Item key="0">
      <CustomLink to="/me">Your Profile</CustomLink>
    </Menu.Item>
    <Menu.Item key="1">
      <CustomLink to="/setting">Setting</CustomLink>
    </Menu.Item>
    <Menu.Item key="3">
      <CustomLink to="/logout">Logout</CustomLink>
    </Menu.Item>
  </CustomMenu>
);

const MenuItems = [
  { text: 'Home', link: '/' },
  { text: 'Catalog', link: '/catalog' },
  { text: 'Pricing', link: '/pricing' }
]

const Header = (props) => {
  if (props.location.pathname === '/learning') return null
  return (
    <HeaderContainer>
        <HeaderMenu>
          <Link to="/">
            <LogoWrapper src={logo} alt="logo" />
          </Link>
          {
            MenuItems.map(item => {
              return (
                <CustomLink
                  to={item.link}
                  key={item.text}
                  active={props.location.pathname === item.link ? 1 : 0}
                >
                  {item.text}
                </CustomLink>
              )
            })
          }
        </HeaderMenu>
        <UserMenu>
          <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
            <UserAvatar src={avatar} alt="user avatar" />
          </Dropdown>
          
          <NotiIcon src={noti} alt="notification icon" />
        </UserMenu>
    </HeaderContainer>
  )
}

export default withRouter(Header);