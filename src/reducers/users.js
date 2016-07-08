import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  SAVE_USER_REQUEST,
  SAVE_USER_SUCCESS,
  SAVE_USER_FAILED,
  REMOVE_USER_REQUEST,
  REMOVE_USER_SUCCESS,
  REMOVE_USER_FAILED,
  LOAD_USERS_REQUEST,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAILED
} from '../constants/UserConstants'

const initialState = {
  currentUser: {}
}

export default function productReducer(state = initialState, action) {
  switch (action.type) {

    case LOAD_USERS_REQUEST:
      return {
        ...state
      }

    case LOAD_USERS_FAILED:
      return {
        ...state
      }

    case LOAD_USERS_SUCCESS:
      return {
        ...state
      }

    case CREATE_USER_REQUEST:
      return {
        ...state
      }

    case CREATE_USER_FAILED:
      return {
        ...state
      }

    case CREATE_USER_SUCCESS:
      return {
        ...state,
        currentUser: {
          ...action.user,
          id : action.id
        }
      }

    case SAVE_USER_REQUEST:
      return {
        ...state
      }

    case SAVE_USER_FAILED:
      return {
        ...state,
        wait: false
      }

    case SAVE_USER_SUCCESS:
      return {
        ...state
      }

    case REMOVE_USER_REQUEST:
      return {
        ...state
      }

    case  REMOVE_USER_FAILED:
      return {
        ...state
      }

    case  REMOVE_USER_SUCCESS:
      return {
        ...state
      }

    default:
      return state
  }
}
