import React from 'react'
import AddToCart from 'material-ui/svg-icons/action/add-shopping-cart'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'

export default class ProductTable extends React.Component {
  static propTypes = {
    products : React.PropTypes.array.isRequired
  }

  render() {
    const { products } = this.props

    return <div>
      <GridList cols="5">
        {
          products.map((product) => {
            return <GridTile
              key={product.id}
              title={product.title}
              subtitle={<span>price: <b>{product.price}$</b></span>}
              actionIcon={<IconButton><AddToCart color="white" /></IconButton>}
            >
              <img src={'/productImg/' + product.image_url}/>
            </GridTile>
          })
        }
      </GridList>
    </div>
  }


}
