import React, { Suspense, lazy } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import { Header, Loading } from 'components'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import browserhistory from './browserhistory'
import AppTheme from './theme/appTheme'

const MainPage = lazy(() => {
  return import('./pages/MainPage/index')
})

const applyTheme = createMuiTheme(AppTheme)

const Routes = () => {
  return (
    <Router history={browserhistory}>
      <MuiThemeProvider theme={applyTheme}>
        <Header>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/" component={MainPage} />
            </Switch>
          </Suspense>
        </Header>
      </MuiThemeProvider>
    </Router>
  )
}

export default Routes
