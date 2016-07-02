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

const initialState = {
  productScope  : [],
  wait          : false,
  currentPage   : 0
}

export default function productReducer(state = initialState, action) {
  switch (action.type) {

    case LOAD_PRODUCTS_REQUEST:
      return {
        ...state,
        wait: true
      }

    case LOAD_PRODUCTS_FAILED:
      return {
        ...state,
        wait: false
      }

    case LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        pageLoaded: action.page,
        wait: false,
        tableScope: products
      }

    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        wait: true
      }

    case ADD_PRODUCT_FAILED:
      return {
        ...state,
        wait: false
      }

    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        wait: false
      }

    case SAVE_PRODUCT_REQUEST:
      return {
        ...state,
        wait: true
      }

    case SAVE_PRODUCT_FAILED:
      return {
        ...state,
        wait: false
      }

    case SAVE_PRODUCT_SUCCESS:
      return {
        ...state,
        wait: false,
        tableScope: state.tableScope.map( function(product) {
          if ( product.id == action.id ) {
            return {
              id: action.id,
              data: action.product
            }
          }
          return product
        })
      }

    case REMOVE_PRODUCT_REQUEST:
      return {
        ...state,
        wait: true
      }

    case  REMOVE_PRODUCT_FAILED:
      return {
        ...state,
        wait: false
      }

    case  REMOVE_PRODUCT_SUCCESS:
      return {
        ...state,
        wait: false
      }

    default:
      return state
  }
}
