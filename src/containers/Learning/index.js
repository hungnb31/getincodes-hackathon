import React from 'react'
import styled from 'styled-components'
import {Button, Icon, Avatar} from 'antd'
import logo from '../../assets/logo.svg'
import avatar from '../../assets/images/user-avatar.png'
import { Link } from 'react-router-dom'
import { Player } from 'video-react'

import 'antd/lib/button/style/index.css'
import 'antd/lib/icon/style/index.css'
import 'antd/lib/avatar/style/index.css'
import 'video-react/dist/video-react.css'

const LeftDiv = styled.div`
  transition: .5s;
  width: ${props => props.active ? '25vw' : '48px'};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: ${props => props.active ? '#fafafa' : 'rgba(255,255,255,.2)'};
`
const ListItem = styled.div`
  cursor: pointer;
  padding: 12px 24px;
  transition: .2s;
  background: ${props => props.active ? '#efefef' : ''};
  font-size: 14px;
  color: #444;
  :hover {
    background: #efefef;
  }
`

const CustomLink = styled(Link)`
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`

const CustomInput = styled.input`
  width: 100%;
  border-radius: 20px;
  padding: 8px 32px 8px 16px;
  box-shadow: none;
  border: 1px solid #ddd;
  :focus {
    outline: none;
  }
`
const CustomPlayer = styled(Player)`
  height: 100%!important;
  .video-react-video:focus {
    outline: none!important;
  }
  .video-react-big-play-button {
    left: 50%!important;
    top: 50%!important;
    margin-left: -60px;
    margin-top: -22px;
    border: none!important;
  }
  .video-react-control-bar {
    height: 44px!important;
    background-color: rgba(32, 32, 32, 0.3)!important;
    > * {
      font-size: 15px!important;
    }
  }
`

class Learning extends React.Component {
  state = {
    left: false,
    activeLesson: +localStorage.activeLes > -1 ? +localStorage.activeLes : 0,
    course: {
      title: 'Java Tutorial For Complete Beginner'
    },
    lessons: [
      { title: '1. Introduction', duration: '10m', done: true },
      { title: '2. What java is and how it works', duration: '13min' },
      { title: '3. Prequisite', duration: '5min' },
      { title: '4. Getting started', duration: '20min' },
      { title: '5. Start the engine', duration: '3min' },
      { title: '6. Before started', duration: '7min' },
      { title: '7. End of class', duration: '1hr' }
    ]
  }

  render () {
    const items = this.state.lessons.map((les, i) => (
      <ListItem active={this.state.activeLesson === i} key={i + ''} onClick={() => {this.setState({activeLesson: i}); localStorage.activeLes = i}}>
        <div style={{marginBottom: '8px'}}>{les.title}</div>
        <div style={{opacity: '.6', fontSize: '13px'}}><Icon type="play-circle" /> {les.duration}</div>
      </ListItem>
    ))
    return (
      <div style={{display: 'flex', height: '100vh', background: '#000'}}>
        <LeftDiv active={this.state.left}>
          <Button
            size="large"
            style={{height: '60px', border: 'none', width: '100%', textAlign: 'left', paddingLeft: '16px',background: 'transparent', fontWeight: 600, color: '#727272'}}
            onClick={() => this.setState(prevState => ({left: !prevState.left}))}
          >
            <Icon type={this.state.left ? 'menu-fold' : 'menu-unfold'} style={{verticalAlign: 'middle', marginRight: '4px'}}></Icon>
            {this.state.left ? 'Table Of Contents' : ''}
          </Button>
          {this.state.left &&
            <div style={{width: '25vw', flexGrow: '1'}}>
              {items}
            </div>
          }
        </LeftDiv>
        <div style={{flexGrow: 1, display: 'flex', flexDirection: 'column', background: '#000', height: '100%', overflow: 'hidden', boxShadow: '0 0 4px rgba(0,0,0,.25)'}}>
          <div style={{height: '60px', minHeight: '60px', maxHeight: '60px', display: 'flex'}}>
            <Link to="/" style={{padding: '12px 12px 0', marginRight: '16px'}}>
              <img src={logo} alt="logo" height="36px" />
            </Link>
            <div style={{height: '100%', display: 'flex', alignItems: 'center'}}>
              <CustomLink to="/detail" style={{color: '#eaeaea', fontSize: '16px'}}>{this.state.course.title}</CustomLink>
            </div>
          </div>
          <div style={{flexGrow: '1', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <CustomPlayer>
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </CustomPlayer>
          </div>
        </div>
        <div style={{width: '25vw', height: '100%', overflow: 'auto', background: '#fafafa'}}>
          <div style={{height: '60px', boxShadow: '0 2px 0 rgba(0, 0, 0, 0.015)', display: 'flex', alignItems: 'center', padding: '0 20px'}}>
            <span style={{fontWeight: '600', color: '#727272'}}>Questions & Answers</span>
          </div>
          <div style={{padding: '12px', display: 'flex', boxShadow: '0 2px 0 rgba(0, 0, 0, 0.015)', position: 'relative'}}>
            <Link to="/me" style={{display: 'block', marginRight: '8px'}}>
              <img src={avatar} alt="avatar" height="36px" style={{display: 'block', border: '2px solid #fff', borderRadius: '50%'}} />
            </Link>
            <CustomInput></CustomInput>
            <Icon type="smile" style={{position: 'absolute', right: '24px', top: '22px', fontSize: '20px', color: '#777', cursor: 'pointer'}} />
          </div>
          <div style={{padding: '12px', display: 'flex'}}>
            <Avatar icon="user" style={{marginRight: '12px', minWidth: '32px', marginTop: '8px'}} />
            <div style={{flexGrow: '1'}}>
              <div style={{background: '#f3f4f7', display: 'flex', borderRadius: '8px', marginBottom: '8px', fontSize: '14px'}}>
                <span style={{padding: '8px 12px', flexGrow: '1'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                <div style={{textAlign: 'center', opacity: '.5', padding: '4px 12px'}}>
                  <Icon type="caret-up" style={{cursor: 'pointer'}} />
                  <div style={{fontWeight: 600, fontSize: '20px', lineHeight: '1'}}>10</div>
                  <Icon type="caret-down" style={{cursor: 'pointer'}} />
                </div>
              </div>
              <div style={{display: 'flex', opacity: '.6', padding: '0 8px', fontSize: '13px'}}>
                <span>Reply</span>
                <span style={{marginLeft: 'auto'}}>01:20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Learning;
