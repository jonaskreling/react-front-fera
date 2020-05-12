import 'react-hot-loader/patch'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

const renderApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

render(renderApp(), document.getElementById('root'))

serviceWorker.unregister()
