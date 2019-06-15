import React from 'react'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'

import {
  HeaderContainer,
  Menu,
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
`

const MenuItems = [
  { text: 'Home', link: '/' },
  { text: 'Catalog', link: '/catalog' },
  { text: 'Pricing', link: '/pricing' }
]

const Header = (props) => {
  return (
    <HeaderContainer>
        <Menu>
          <LogoWrapper src={logo} alt="logo" />
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
        </Menu>
        <UserMenu>
          <UserAvatar src={avatar} alt="user avatar" />
          <NotiIcon src={noti} alt="notification icon" />
        </UserMenu>
    </HeaderContainer>
  )
}

export default withRouter(Header);