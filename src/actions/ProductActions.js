import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILED,
  SAVE_PRODUCT_REQUEST,
  SAVE_PRODUCT_SUCCESS,
  SAVE_PRODUCT_FAILED,
  REMOVE_PRODUCT_REQUEST,
  REMOVE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_FAILED,
  LOAD_PRODUCTS_REQUEST,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAILED
} from '../constants/ProductConstants'

import request from 'superagent'

export function addProduct(product) {
  return (dispatch) => {
    dispatch({
      type : ADD_PRODUCT_REQUEST
    })

    request
      .post('http://localhost:3002/products')
      .send({table: {data: table}})
      .end( (err, res) => {
        if ( err || !res.ok ) {
          console.log('Table didn\'t added. Status Code: ' + err)
          dispatch({
            type: ADD_PRODUCT_FAILED
          })
          return
        }

        const response = res.body

        if (response.status == 'failed') {
          console.log('Table didn\'t added. Errors: ' + response.errors)
          dispatch({
            type: ADD_PRODUCT_FAILED
          })
          return
        }

        dispatch({
          type: ADD_PRODUCT_SUCCESS,
          id  : response.id,
          table
        })
      })
  }
}

export function saveProduct(id, table) {
  return (dispatch) => {
    dispatch({
      type: SAVE_PRODUCT_REQUEST
    })

    request
      .put('http://localhost:3002/products/' + id)
      .send({table: {data: table}})
      .end( (err, res) => {
        if ( err || !res.ok ) {
          console.log('Table didn\'t saved. Status Code: ' + err)
          dispatch({
            type: SAVE_PRODUCT_FAILED
          })
          return
        }

        const response = res.body

        if (response.status == 'failed') {
          console.log('Table didn\'t saved. Errors: ' + response.errors)
          dispatch({
            type: SAVE_PRODUCT_FAILED
          })
          return
        }

        dispatch({
          type: SAVE_PRODUCT_SUCCESS,
          id,
          table
        })
      })
  }
}

export function removeProduct(id) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_PRODUCT_REQUEST
    })

    request
      .del('http://localhost:3002/products/' + id)
      .end( (err, res) => {
        if ( err || !res.ok ) {
          console.log('Table didn\'t removed. Status Code: ' + err)
          dispatch({
            type: REMOVE_PRODUCT_FAILED
          })
          return
        }

        const response = res.body

        if (response.status == 'failed') {
          console.log('Table didn\'t removed. Errors: ' + response.errors)
          dispatch({
            type: REMOVE_PRODUCT_FAILED
          })
          return
        }

        dispatch({
          type: REMOVE_PRODUCT_SUCCESS,
          id
        })
      })
  }
}

export function loadProducts(page) {
  return (dispatch) => {
    dispatch({
      type: LOAD_PRODUCTS_REQUEST
    })

    request
      .get('http://localhost:3002/products/' + page)
      .end((err, res) => {
        if ( err || !res || !res.ok ) {
          console.log('Looks like there was a problem. Status Code: ' + err)
          dispatch({
            type: LOAD_PRODUCTS_FAILED
          })
          return
        }

        dispatch({
          type: LOAD_PRODUCTS_SUCCESS,
          productScope: res.body,
          page
        })
      })
  }
}
