import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Add from 'material-ui/svg-icons/action/note-add'
import ProductTable from '../../components/ProductTable'
import ReactPaginate from 'react-paginate'
import { loadProducts } from '../../actions/ProductActions'
import { connect } from 'react-redux'

export default class Products extends React.Component {
  static propTypes = {
    productScope  : React.PropTypes.array.isRequred,
    currentPage   : React.PropTypes.number.isRequred,
    wait          : React.PropTypes.bool.isRequred,
    loadProducts  : React.PropTypes.func.isRequred,
    dispatch      : React.PropTypes.func.isRequred
  }

  handlePageClick = (page) => {
    console.log(page)
    this.loadProducts(page)
  }

  componentWillMount = () => {
    if ( this.props.currentPage == 0 ) {
      this.props.loadProducts(1)
    }
  }

  render() {
    const { productScope } = this.props

    return <div>
      <RaisedButton label={"add product"} onTouchTap={() => { this.props.dispatch(push('/new')) }} linkButton={true}
                    primary={true} icon={<Add />}/>
      <ProductTable products={productScope} />
      <ReactPaginate clickCallback={this.handlePageClick}
                     previousLabel={<span class="prev">Previous</span>}
                     nextLabel={<span class="prev">Next</span>}
                     breakLabel={<span class="ellipsis">...</span>}
                     pageNum={this.props.currentPage}
                     marginPagesDisplayed={2}
                     pageRangeDisplayed={5} />
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
