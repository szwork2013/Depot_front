import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Root from '../containers/Root'
import Products from '../containers/Products'
import ProductCreator from '../containers/ProductCreator'
import Cart from '../containers/Cart'
//import ProductEditor from '../containers/ProductEditor'
import UserCreator from '../containers/UserCreator'
import OrderCreator from '../containers/OrderCreator'
import NotFound from '../components/NotFound'
export const routes = (
  <div>
    <Route path='/' component={Root}>
      <IndexRoute component={Products} />
      <Route path='/products/new' component={ProductCreator} />
      {/*<Route path='/products/edit/:id' component={ProductEditor} />*/}
      <Route path='/users/new' component={UserCreator} />
      <Route path='/orders/new' component={OrderCreator}/>
      <Route path='/cart' component={Cart} />
    </Route>
    <Route path='*' component={NotFound} />
  </div>
)

