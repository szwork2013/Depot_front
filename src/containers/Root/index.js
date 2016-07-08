import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../../components/Header'
import { push } from 'react-router-redux'
import styles from './root.scss'
import { loadCart } from '../../actions/CartActions'

class Root extends React.Component {
  componentWillMount = () => {
    if( !localStorage.getItem('cart') ) {
      localStorage.setItem( 'cart', JSON.stringify({ids: []}) )
    }
    this.props.loadCart(JSON.parse(localStorage.getItem('cart')).ids)
  }

  redirect = (path) => {
    this.props.dispatch(push(path))
  }

  render() {
    return <div>
      <Header redirect={this.redirect}  />
      <div className={styles.container}>
        {this.props.children}
      </div>
    </div>
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadCart : bindActionCreators(loadCart, dispatch),
    dispatch : dispatch
  }
}

export default connect(undefined, mapDispatchToProps)(Root)
