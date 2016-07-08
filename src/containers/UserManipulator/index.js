import { Component } from 'react'
import update from 'react-addons-update'

export default class UserManipulator extends Component {

  state = {
    errorText: {},
    user: {},
    valid: {
      login   : false,
      name    : true,
      password: false,
      password_repeat : false,
      email   : false,
      address : true,
      role    : false
    }
  }

  static errorMessages = {
    login    : 'Must be not empty and unique.',
    password : 'Must contain at least 4 symbols.',
    password_repeat : 'Must contain the same at in field password.',
    email   : 'Must be valid email.',
    role    : 'Choose your role'
  }

  updateField = ( name, value ) => {
    const { user, errorText, valid } = this.state
    const newErrorMsg = ( this.validate( name, value ) ) ? '' : UserManipulator.errorMessages[name]

    this.setState({
      user      : update(user, {[name]: {$set: value}}),
      errorText : update(errorText, {[name]: {$set: newErrorMsg}}),
      valid     : update(valid, {[name]: {$set: newErrorMsg === ''}})
    })
  }

  validate = ( name, value ) => {
    switch (name) {
      case 'name':
        return value.length > 0
      case 'password':
        return value.length > 3
      case 'email':
        return value.search( /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i ) != -1
      case 'role':
        return value.search( /^(Purchacer|Vendor)$/ ) != -1
      default:
        return true
    }
  }

  isInvalid = () => {
    const valid = this.state.valid

    for ( let key in valid ) {
      if ( !valid[key] ) {
        return true
      }
    }
    return false
  }
}
