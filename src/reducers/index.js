import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import products from './products'
import cart from './cart'
import order from './order'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    products,
    cart,
    order,
    router,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
