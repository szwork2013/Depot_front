import React from 'react'
import styles from './notFound.scss';
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router'
import Home from 'material-ui/svg-icons/action/home';

export default class NotFound extends React.Component {
  render() {
    return <div className={styles.background}>
      <span className={styles.info}>Page not found</span>
      <br />
      <FlatButton containerElement={<Link to='/' />} linkButton={true} primary={true} icon={<Home/>}/>
    </div>
  }
}
