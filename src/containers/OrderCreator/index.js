import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RaisedButton from 'material-ui/RaisedButton'
import Ok from 'material-ui/svg-icons/action/check-circle'
import Back from 'material-ui/svg-icons/content/backspace'
import styles from '../../styles/buttons.scss'
import { push } from 'react-router-redux'
import OrderForm from '../../components/OrderForm'
import update from 'react-addons-update'
import { doOrder } from '../../actions/OrderActions'
import { clearCart } from '../../actions/CartActions'

class OrderCreator extends React.Component {
  state = {
    customer: {},
    errorText: {},
    valid: {
      name    : false,
      address : false,
      email   : false,
      pay_type: false
    }
  }

  static errorMessages = {
    name        : 'Must be not empty.',
    email       : 'Must be valid email address.',
    address     : 'Must be not empty.',
    pay_type    : 'Must have valid value.'
  }

  updateField = ( name, value ) => {
    const { customer, errorText, valid } = this.state
    const newErrorMsg = ( this.validate( name, value ) ) ? '' : OrderCreator.errorMessages[name]

    this.setState({
      customer   : update(customer, {[name]: {$set: value}}),
      errorText  : update(errorText, {[name]: {$set: newErrorMsg}}),
      valid      : update(valid, {[name]: {$set: newErrorMsg === ''}})
    })
  }

  validate = ( name, value ) => {
    switch (name) {
      case 'name':
      case 'address':
        return value.length > 0
      case 'email':
        return value.search( /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i ) != -1
      case 'pay_type':
        return value.search( /^(Credit card|Check|Purchase order)$/i ) != -1
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

  doOrder = () => {
    this.props.doOrder( this.state.customer, this.props.cart )
    this.props.clearCart()
    this.props.dispatch(push('/'))
  }

  render() {
    const { cart } = this.props
    const { errorText } = this.state

    return <div>
      <OrderForm cart={cart} customer={this.state.customer} errorText={errorText} updateField={this.updateField} />
      <RaisedButton label="buy" onTouchTap={this.doOrder} linkButton={true} primary={true} disabled={this.isInvalid()} icon={<Ok />} className={styles.btn}/>
      <RaisedButton label="back" onTouchTap={() => { this.props.dispatch(push('/cart')) }} linkButton={true} icon={<Back />} className={styles.btn}/>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    cart : state.cart.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch : dispatch,
    doOrder  : bindActionCreators(doOrder, dispatch),
    clearCart: bindActionCreators(clearCart, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderCreator)
