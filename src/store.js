import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerReducer } from 'react-router-redux'
import * as reducers from 'reducers'
import rootSaga from './sagas'

const transformReducers = allReducers => {
  return Object.keys(allReducers)
    .filter(reducerKey => reducerKey !== 'default')
    .map(reducerKey => {
      return {
        [`${reducerKey}Actions`]: allReducers[reducerKey].createReducer
      }
    })
    .reduce((actions, nextAction) => {
      return { ...actions, ...nextAction }
    }, {})
}

// Initialize the Redux set up
const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 1000
    })) ||
  compose
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  combineReducers({ ...transformReducers(reducers), routing: routerReducer }),
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

// Run the sagas now
sagaMiddleware.run(rootSaga)
