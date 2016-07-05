import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../../components/Header'
import styles from './root.scss'
import { loadCart } from '../../actions/CartActions'

class Root extends React.Component {
  componentWillMount = () => {
    localStorage.clear()
    if( !localStorage.getItem('cart') ) {
      localStorage.setItem( 'cart', JSON.stringify({ids: []}) )
    }
    this.props.loadCart(JSON.parse(localStorage.getItem('cart')).ids)
  }

  render() {
    return <div>
      <Header />
      <div className={styles.container}>
        {this.props.children}
      </div>
    </div>
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadCart : bindActionCreators(loadCart, dispatch)
  }
}

export default connect(undefined, mapDispatchToProps)(Root)
