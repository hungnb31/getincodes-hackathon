import React from 'react'
import styled from 'styled-components'
import {Button, Icon} from 'antd'
import 'antd/lib/button/style/index.css'
import 'antd/lib/icon/style/index.css'

const LeftDiv = styled.div`
  transition: .5s;
  width: ${props => props.active ? '25vw' : '48px'};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`
const ListItem = styled.div`
  cursor: pointer;
  padding: 8px 24px;
  transition: .2s;
  :hover {
    background: #efefef;
  }
`

class Learning extends React.Component {
  state = {
    left: true,
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
      <ListItem key={i + ''}>
        <div style={{marginBottom: '8px'}}>{les.title}</div>
        <div style={{opacity: '.6', fontSize: '13px'}}><Icon type="play-circle" /> {les.duration}</div>
      </ListItem>
    ))
    return (
      <div style={{display: 'flex', height: '100vh'}}>
        <LeftDiv active={this.state.left}>
          <Button
            size="large"
            style={{border: 'none', width: '100%', textAlign: 'left', paddingLeft: '16px', marginBottom: '16px'}}
            onClick={() => this.setState(prevState => ({left: !prevState.left}))}
          >
            <Icon type={this.state.left ? 'menu-fold' : 'menu-unfold'} style={{verticalAlign: 'middle', marginRight: '4px'}}></Icon>
            {this.state.left ? 'Table of contents' : ''}
          </Button>
          {this.state.left &&
            <div style={{width: '25vw', flexGrow: '1'}}>
              {items}
            </div>
          }
        </LeftDiv>
        <div style={{flexGrow: 1, background: '#000', height: '100%', overflow: 'auto'}}></div>
        <div style={{width: '25vw', height: '100%', overflow: 'auto'}}></div>
      </div>
    )
  }
}

export default Learning;
