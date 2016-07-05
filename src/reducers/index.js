import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import products from './products'
import cart from './cart'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    products,
    cart,
    router,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
