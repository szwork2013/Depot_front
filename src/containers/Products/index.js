import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Add from 'material-ui/svg-icons/action/note-add'
import Cart from 'material-ui/svg-icons/action/shopping-basket'
import {fullWhite} from 'material-ui/styles/colors'
import ProductTable from '../../components/ProductTable'
import { loadProducts } from '../../actions/ProductActions'
import { addToCart } from '../../actions/CartActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'
import styles from '../../styles/buttons.scss'
import NotificationSystem from 'react-notification-system'

class Products extends React.Component {

  componentWillMount = () => {
    if ( this.props.currentPage == 0 ) {
      this.props.loadProducts(1)
    }
  }

  componentDidMount = () => {
    this.notificationSystem = this.refs.notificationSystem
  }

  addToCart = (product) => {
    this.props.addToCart(product)
    this.notificationSystem.addNotification({
      message : product.title + ' added to cart',
      level   : 'success',
      position: 'br'
    })
  }

  alreadyInCart = (product) => {
    this.notificationSystem.addNotification({
      message : product.title + ' already in cart',
      level   : 'warning',
      position: 'br'
    })
  }

  render() {
    const { productScope, cart } = this.props

    return <div>
      <RaisedButton label={"add product"} onTouchTap={() => { this.props.dispatch(push('/new')) }} linkButton={true}
                    primary={true} icon={<Add />} className={styles.btn}/>
      <RaisedButton label={"cart"} onTouchTap={() => { this.props.dispatch(push('/cart')) }} linkButton={true}
                    backgroundColor="#a4c639" labelColor={fullWhite} icon={<Cart />} className={styles.btn}/>
      <br />
      <ProductTable products={productScope} addToCart={this.addToCart}
                    alreadyInCart={this.alreadyInCart} cartIds={cart.map( (product) => { return product.id } )} />
      <NotificationSystem ref="notificationSystem" />
    </div>
  }
}

function mapStateToProps(state) {
  return {
    productScope  : state.products.productScope,
    currentPage   : state.products.currentPage,
    wait          : state.products.wait,
    cart          : state.cart.cart,
    productLoaded : state.products.productLoaded
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadProducts : bindActionCreators(loadProducts, dispatch),
    addToCart    : bindActionCreators(addToCart, dispatch),
    dispatch     : dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
