import {
  LOAD_CART_REQUEST,
  LOAD_CART_SUCCESS,
  LOAD_CART_FAILED,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART
} from '../constants/CartConstants'

import request from 'superagent'

export function loadCart(ids) {
  return (dispatch) => {
    dispatch({
      type: LOAD_CART_REQUEST
    })

    if ( ids.length == 0 ) {
      dispatch({
        type: LOAD_CART_SUCCESS,
        cart: []
      })
      return
    }

    request
      .post('/products/show')
      .send({ids: ids})
      .end((err, res) => {
        if ( err || !res.ok ) {
          console.log('Looks like there was a problem. Status Code: ' + err)
          dispatch({
            type: LOAD_CART_FAILED
          })
          return
        }

        dispatch({
          type: LOAD_CART_SUCCESS,
          cart: res.body
        })
      })
  }
}

export function addToCart(product) {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      product
    })
  }
}

export function removeFromCart(id) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FROM_CART,
      id
    })
  }
}

export function clearCart() {
  return (dispatch) => {
    dispatch({
      type: CLEAR_CART
    })
  }
}
