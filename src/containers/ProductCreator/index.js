import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Save from 'material-ui/svg-icons/content/save'
import Back from 'material-ui/svg-icons/content/backspace'
import ProductManipulator from '../ProductManipulator'
import { addProduct } from '../../actions/ProductActions'
import Product from '../../components/Product'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import styles from '../../styles/buttons.scss'

export default class ProductCreator extends ProductManipulator {

  state = {
    product: {}
  }

  _addProduct = () => {
    this.props.addProduct(this.state.product)
    this.props.dispatch(push('/'))
  }

  render() {
    return <div>
      <Product product     = {this.state.product}
               updateField = {this.updateField}
      />
      <br clear="left" />
      <RaisedButton label="save product" onTouchTap={this._addProduct} linkButton={true} primary={true} icon={<Save/>} className={styles.btn}/>
      <RaisedButton label="back" onTouchTap={() => { this.props.dispatch(push('/')) }} linkButton={true} secondary={true} icon={<Back/>} className={styles.btn}/>
    </div>
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addProduct : bindActionCreators(addProduct, dispatch),
    dispatch   : dispatch
  }
}

export default connect(undefined, mapDispatchToProps)(ProductCreator)
