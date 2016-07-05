import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Root from '../containers/Root'
import Products from '../containers/Products'
import ProductCreator from '../containers/ProductCreator'
//import Cart from '../containers/Cart'
//import ProductEditor from '../containers/ProductEditor'
import NotFound from '../components/NotFound'
export const routes = (
  <div>
    <Route path='/' component={Root}>
      <IndexRoute component={Products} />
      <Route path='/new' component={ProductCreator} />
      {/*<Route path='/edit/:id' component={ProductEditor} />
      <Route path='/cart' component={Cart} />*/}
    </Route>
    <Route path='*' component={NotFound} />
  </div>
)

