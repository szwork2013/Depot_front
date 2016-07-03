import React from 'react'
import Header from '../../components/Header'

export default class Root extends React.Component {
  render() {
    return <div>
      <Header />
      {this.props.children}
    </div>
  }
}
