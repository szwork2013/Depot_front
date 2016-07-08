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

import request from 'superagent'

export function createUser(user) {
  return (dispatch) => {
    dispatch({
      type : CREATE_USER_REQUEST
    })

    request
      .post('/api/users')
      .send({user: user})
      .end( (err, res) => {
        if ( err || !res.ok ) {
          console.log('User didn\'t created. Status Code: ' + err)
          dispatch({
            type: CREATE_USER_FAILED
          })
          return
        }

        const response = res.body

        if (response.status == 'failed') {
          console.log('User didn\'t created. Errors: ' + response.errors)
          dispatch({
            type: CREATE_USER_FAILED
          })
          return
        }

        dispatch({
          type: CREATE_USER_SUCCESS,
          id  : response.id,
          user
        })
      })
  }
}

export function saveUser(id, user) {
  return (dispatch) => {
    dispatch({
      type: SAVE_USER_REQUEST
    })

    request
      .put('/api/users/' + id)
      .send({user: user})
      .end( (err, res) => {
        if ( err || !res.ok ) {
          console.log('User changes didn\'t saved. Status Code: ' + err)
          dispatch({
            type: SAVE_USER_FAILED
          })
          return
        }

        const response = res.body

        if (response.status == 'failed') {
          console.log('User changes didn\'t saved. Errors: ' + response.errors)
          dispatch({
            type: SAVE_USER_FAILED
          })
          return
        }

        dispatch({
          type: SAVE_USER_SUCCESS,
          id,
          user
        })
      })
  }
}

export function removeUser(id) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_USER_REQUEST
    })

    request
      .del('/api/users/' + id)
      .end( (err, res) => {
        if ( err || !res.ok ) {
          console.log('User didn\'t removed. Status Code: ' + err)
          dispatch({
            type: REMOVE_USER_FAILED
          })
          return
        }

        const response = res.body

        if (response.status == 'failed') {
          console.log('User didn\'t removed. Errors: ' + response.errors)
          dispatch({
            type: REMOVE_USER_FAILED
          })
          return
        }

        dispatch({
          type: REMOVE_USER_SUCCESS,
          id
        })
      })
  }
}

export function loadUsers(user) {
  return (dispatch) => {
    dispatch({
      type: LOAD_USERS_REQUEST
    })

    request
      .get('/api/users')
      .end((err, res) => {
        if ( err || !res.ok ) {
          console.log('Looks like there was a problem. Status Code: ' + err)
          dispatch({
            type: LOAD_USERS_FAILED
          })
          return
        }

        dispatch({
          type: LOAD_USERS_SUCCESS,
          products: res.body,
          user
        })
      })
  }
}
