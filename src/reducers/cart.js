import {
  LOAD_CART_REQUEST,
  LOAD_CART_SUCCESS,
  LOAD_CART_FAILED,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART
} from '../constants/CartConstants'

const initialState = {
  cart       : [],
  cartLoaded : false
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {

    case LOAD_CART_REQUEST:
      return {
        ...state,
        cartLoaded : false
      }

    case LOAD_CART_FAILED:
      return {
        ...state,
        cartLoaded : false
      }

    case LOAD_CART_SUCCESS:
      return {
        ...state,
        cartLoaded : true,
        cart       : action.cart.map((item) => {
          return {
            ...item,
            amount: 1
          }
        })
      }

    case ADD_TO_CART:
      localStorage.setItem('cart', JSON.stringify({ids: getIds().concat( action.product.id )} ) )
      return {
        ...state,
        cart : state.cart.concat({
          ...action.product,
          amount: 1
        })
      }

    case REMOVE_FROM_CART:
      localStorage.setItem('cart', JSON.stringify(
        {ids: getIds().filter( (id) => { return id != action.id } )}
      ))

      return {
        ...state,
        cart : state.cart.filter( (product) => { return product.id != action.id } )
      }

    case CLEAR_CART:
      localStorage.setItem('cart', JSON.stringify({ids: []}) )

      return {
        ...state,
        cart : []
      }

    default:
      return state
  }
}

function getIds() {
  return JSON.parse(localStorage.getItem('cart')).ids
}
