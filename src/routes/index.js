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

export const routes = ([
  {
    path: '/',
    component: Root,
    indexRoute: { component: Products },
    childRoutes: [
      { path: 'products/new', component: ProductCreator },
      { path: 'users/new',    component: UserCreator },
      { path: 'orders/new',   component: OrderCreator },
      { path: 'cart',         component: Cart }
    ]
  },
  {
    path: '*',
    component: NotFound
  }
])

