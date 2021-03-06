/**
 * Route definitions for the app
 * https://github.com/jamiebuilds/react-loadable
 * React.lazy can also be used in future.
 */

import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Base from './components/base/Base'
import HomeContainer from './containers/HomeContainer'
import LoginContainer from './containers/LoginContainer'
import ShowContainer from './containers/ShowContainer'
import ShowSearchContainer from './containers/ShowSearchContainer'

export default class App extends Component {
  render () {
    return (
      <Base>
        <HomeContainer>
          <Switch>
            <Route exact path='/' component={LoginContainer} />
            <Route exact path='/shows' component={ShowContainer} />
            <Route exact path='/search' component={ShowSearchContainer} />
          </Switch>
        </HomeContainer>
        {/* jp(Jun15, 2018) 404 should come here and without sidebar */}
      </Base>
    )
  }
}
