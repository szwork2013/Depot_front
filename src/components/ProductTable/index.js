import React from 'react'
import AddToCart from 'material-ui/svg-icons/action/add-shopping-cart'
import Done from 'material-ui/svg-icons/action/done'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'

export default class ProductTable extends React.Component {
  static propTypes = {
    products      : React.PropTypes.array.isRequired,
    addToCart     : React.PropTypes.func.isRequired,
    alreadyInCart : React.PropTypes.func.isRequired,
    cartIds       : React.PropTypes.array.isRequired
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

  alreadyInCart = (product) => {
    this.props.alreadyInCart(product)
  }

  drawActionIcon = (product) => {
    if ( this.props.cartIds.some( (id) => { return product.id === id } ) ) {
      return <IconButton onTouchTap={this.alreadyInCart.bind(this, product)}><Done color="white" /></IconButton>
    } else {
      return <IconButton onTouchTap={this.addToCart.bind(this, product)}><AddToCart color="white" /></IconButton>
    }
  }

  onLoadError = (event) => {
    event.target.src='/productImg/ImgNotFound2.jpg'
  }

  render() {
    const { products } = this.props

    return <div>
      <GridList cols={0} style={{margin: '10px auto'}} cellHeight={270}>
        {
          products.map((product) => {
            return <GridTile
              key={product.id}
              title={product.title}
              subtitle={<span>price: <b>{product.price}$</b></span>}
              actionIcon={this.drawActionIcon(product)}
              style={{height: '270px', width: '225px'}}
            >
              <img src={this.pathToImg(product.image_url)} onError={this.onLoadError} />
            </GridTile>
          })
        }
      </GridList>
    </div>
  }


}
