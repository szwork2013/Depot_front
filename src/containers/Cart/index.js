import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RaisedButton from 'material-ui/RaisedButton'
import Buy from 'material-ui/svg-icons/action/shopping-cart'
import Clear from 'material-ui/svg-icons/action/remove-shopping-cart'
import Back from 'material-ui/svg-icons/content/backspace'
import { clearCart, removeFromCart } from '../../actions/CartActions'

export default class Cart extends React.Component {

  render() {
    const { cartLoaded, cart, clearCart, removeFromCart } = this.props

    if ( !cartLoaded ) {
        console.log('What???? WWWHHHHAAAAATTTT!!! CART DIDn\'t LOADED?!?!?! WHAT THE FU$!@%G S**T!!!')
    }

    return <div>
      <CartContent cart={cart} removeItem={removeFromCart} />
      <RaisedButton label="buy" linkButton={true} primary={true} disabled={cart.length == 0} icon={<Buy />} className={styles.btn}/>
      <RaisedButton label="clear" onTouchTap={clearCart} linkButton={true} secondary={true} disabled={cart.length == 0} icon={<Clear />} className={styles.btn}/>
      <RaisedButton label="back" onTouchTap={() => { this.props.dispatch(push('/')) }} linkButton={true} icon={<Back />} className={styles.btn}/>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    cartLoaded : state.cart.cartLoaded,
    cart       : state.cart.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clearCart      : bindActionCreators(clearCart, dispatch),
    removeFromCart : bindActionCreators(removeFromCart, dispatch),
    dispatch       : dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
