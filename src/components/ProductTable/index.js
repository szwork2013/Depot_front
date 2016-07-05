import React from 'react'
import AddToCart from 'material-ui/svg-icons/action/add-shopping-cart'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'

export default class ProductTable extends React.Component {
  static propTypes = {
    products  : React.PropTypes.array.isRequired,
    addToCart : React.PropTypes.func.isRequired
  }

  pathToImg = (path) => {
    if ( path.search( /^http/i ) == -1 ) {
      return '/productImg/' + path
    } else {
      return path
    }
  }

  addToCart = (product) => {
    this.props.addToCart(product)
  }

  render() {
    const { products } = this.props

    return <div>
      <GridList cols="0" style={{marginBottom: '10px', marginTop: '10px'}} cellHeight={270}>
        {
          products.map((product) => {
            return <GridTile
              key={product.id}
              title={product.title}
              subtitle={<span>price: <b>{product.price}$</b></span>}
              actionIcon={<IconButton onTouchTap={this.addToCart.bind(this, product)}><AddToCart color="white" /></IconButton>}
              style={{height: '270px', width: '225px'}}
            >
              <img src={this.pathToImg(product.image_url)} />
            </GridTile>
          })
        }
      </GridList>
    </div>
  }


}
