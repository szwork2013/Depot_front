import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import products from './products'
import carts from './carts'
import orders from './orders'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    products,
    carts,
    orders,
    router,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
