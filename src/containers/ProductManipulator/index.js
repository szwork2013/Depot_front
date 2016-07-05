import { Component } from 'react'
import update from 'react-addons-update'

export default class ProductManipulator extends Component {

  updateField = (name, value) => {
    this.setState({
      product: update(this.state.product, {[name]: {$set: value}})
    })
  }
}
