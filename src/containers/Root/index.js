import React from 'react'
import Header from '../../components/Header'
import styles from './root.scss'

export default class Root extends React.Component {
  render() {
    return <div>
      <Header />
      <div className={styles.container}>
        {this.props.children}
      </div>
    </div>
  }
}
