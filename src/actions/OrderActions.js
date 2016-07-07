import {
  DO_ORDER_REQUEST,
  DO_ORDER_SUCCESS,
  DO_ORDER_FAILED,
} from '../constants/OrderConstants'

import request from 'superagent'

export function doOrder( customer, cart ) {
  return (dispatch) => {
    dispatch({
      type: DO_ORDER_REQUEST
    })

    request
      .post('/api/orders')
      .send({
        customer: customer,
        cart    : cart
      })
      .end((err, res) => {
        if ( err || !res.ok ) {
          console.log('Looks like there was a problem. Status Code: ' + err)
          dispatch({
            type: DO_ORDER_FAILED
          })
          return
        }

        const response = res.body

        if (response.status == 'failed') {
          console.log('Creating order failed. Errors: ' + response.errors)
          dispatch({
            type: DO_ORDER_FAILED
          })
          return
        }

        dispatch({
          type: DO_ORDER_SUCCESS,
          id  : response.id,
          cart
        })
      })
  }
}

