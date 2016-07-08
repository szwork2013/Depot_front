import React from 'react'
import styles from './header.scss'
import AppBar from 'material-ui/AppBar'

export default class Header extends React.Component {
  render() {
    return <AppBar
      title="Depot"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
  }
}
