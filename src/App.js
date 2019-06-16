import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

import Home from './containers/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Learning from './containers/Learning'
import Profile from './containers/Profile'
import Detail from './containers/Detail'

const AppContainer = styled.div`
  width: 100vw;
  font-family: sans-serif;
`

const AppWrapper = styled.div`
  max-width: 80vw;
  margin: 0 auto;
`

const App = () => (
  <AppContainer>
    <Router>
      <AppWrapper>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/me" component={Profile} />
        <Route exact path="/detail" component={Detail} />
      </AppWrapper>
      <Route exact path="/learning" component={Learning} />
      <Footer />
    </Router>
  </AppContainer>
)

export default App;
