import { Component } from 'react'
import update from 'react-addons-update'

export default class ProductManipulator extends Component {

  state = {
    errorText: {},
    product: {},
    valid: {
      title       : false,
      description : false,
      price       : false,
      image_url   : false
    }
  }

  static errorMessages = {
    title       : 'Must be not empty.',
    description : 'Must be not empty.',
    price       : 'Must be a number bigger or equal to 0.01.',
    image_url   : 'Must be valid link to image.'
  }

  updateField = ( name, value ) => {
    const { product, errorText, valid } = this.state
    const newErrorMsg = ( this.validate( name, value ) ) ? '' : ProductManipulator.errorMessages[name]

    this.setState({
      product   : update(product, {[name]: {$set: value}}),
      errorText : update(errorText, {[name]: {$set: newErrorMsg}}),
      valid     : update(valid, {[name]: {$set: newErrorMsg === ''}})
    })
  }

  validate = ( name, value ) => {
    switch (name) {
      case 'title':
      case 'description':
        return value.length > 0
      case 'price':
        return value.search( /^\d+(\.\d{1,2})?$/i ) != -1 && value > 0
      case 'image_url':
        return value.search( /^http.*\.(gif|jpg|png)$/i ) != -1
      default:
        console.log('Something wrong in validation of product form.')
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
