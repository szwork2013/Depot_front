import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Add from 'material-ui/svg-icons/action/note-add'
import ProductTable from '../../components/ProductTable'
import { loadProducts } from '../../actions/ProductActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'

export default class Products extends React.Component {

  componentWillMount = () => {
    if ( this.props.currentPage == 0 ) {
      this.props.loadProducts(1)
    }
  }

  render() {
    const { productScope } = this.props

    return <div>
      <RaisedButton label={"add table"} onTouchTap={() => { this.props.dispatch(push('/new')) }} linkButton={true}
                    primary={true} icon={<Add />}/>
      <br />
      <ProductTable products={productScope} />
    </div>
  }
}

function mapStateToProps(state) {
  return {
    productScope  : state.products.productScope,
    currentPage   : state.products.currentPage,
    wait          : state.products.wait,
    productLoaded : state.products.productLoaded
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadProducts : bindActionCreators(loadProducts, dispatch),
    dispatch     : dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
