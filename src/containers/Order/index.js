import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
import Ok from 'material-ui/svg-icons/action/check-circle'
import Back from 'material-ui/svg-icons/content/backspace'
import styles from '../../styles/buttons.scss'
import { push } from 'react-router-redux'

export default class Order extends React.Component {
  state = {
    customer: {
      name: '',
      email: '',
      address: '',
      pay_type: '',
      comment: ''
    }
  }

  render() {
    const { cart } = this.props

    return <div>
      {/*<ProductForm cart={cart} customer={this.state.customer} />*/}
      <RaisedButton label="buy" linkButton={true} primary={true} disabled={cart.length == 0} icon={<Ok />} className={styles.btn}/>
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
    dispatch       : dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
