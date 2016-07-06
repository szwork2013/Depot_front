import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

export default class CartContent extends React.Component {
  static propTypes = {
    cart           : React.PropTypes.array.isRequired,
    removeFromCart : React.PropTypes.func.isRequired
  }

  pathToImg = (path) => {
    if ( path.search( /^http/i ) == -1 ) {
      return '/productImg/' + path
    } else {
      return path
    }
  }

  render() {
    const { cart, removeFromCart } = this.props
    let total = 0

    if ( cart.length == 0 ) {
      return <div style={{fontSize: '1.5em'}}>
        Your cart is empty.
      </div>
    }

    return <div>
      {
        cart.map((item, index) => {
          total += item.price*item.amount
          return <div>
            <Card key={index}>
              <CardHeader
                title={item.title}
                subtitle={item.price*item.amount + '$'}
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardMedia
                expandable={true}
                style={{height: '180px', width: '150px', padding: '5px', marginRight: '10px', float: 'left'}}
              >
                <img src={this.pathToImg(item.image_url)} />
              </CardMedia>
              <CardText expandable={true}>
                <span style={{marginLeft: '16px', marginRight: '16px'}}>{item.description}</span>
              </CardText>
              <CardActions expandable={true}>
                <FlatButton label="Remove From Cart" secondary={true} onTouchTap={removeFromCart.bind(this, item.id)}/>
              </CardActions>
              <br style={{clear: 'left'}} expandable={true} />
            </Card>
            <br />
          </div>
        })
      }
      total: {total}
    </div>
  }
}
