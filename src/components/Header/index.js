import React from 'react'
import AppBar from 'material-ui/AppBar'
import Shop from 'material-ui/svg-icons/action/shop-two'
import Cart from 'material-ui/svg-icons/action/shopping-basket'
import Login from 'material-ui/svg-icons/action/account-box'
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import {fullWhite} from 'material-ui/styles/colors'

export default class Header extends React.Component {
  static propTypes = {
    redirect: React.PropTypes.func.isRequired
  }

  render() {
    const { redirect } = this.props

    return <AppBar
      title='Depot'
      iconElementLeft={<IconButton><Shop /></IconButton>}
      iconElementRight={
        <div>
          <FlatButton label='' style={{color: 'white'}} icon={<Cart />} onTouchTap={() => {redirect('/cart')}} />
          <FlatButton label='' style={{color: 'white'}} icon={<Login />} onTouchTap={() => {redirect('/login')}} />
        </div>
      }
    />
  }
}
