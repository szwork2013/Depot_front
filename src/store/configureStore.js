import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { makeRootReducer } from '../reducers'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

export default (initialState = {}, history) => {

  const logger = createLogger()
  const middleware = [thunk, logger, routerMiddleware(history)]

  const enhancers = []
  if (__DEBUG__) {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const reducers = require('../reducers').default
      store.replaceReducer(reducers)
    })
  }

  return store
}
