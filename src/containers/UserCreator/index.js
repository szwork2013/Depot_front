import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RaisedButton from 'material-ui/RaisedButton'
import Ok from 'material-ui/svg-icons/action/check-circle'
import Back from 'material-ui/svg-icons/content/backspace'
import styles from '../../styles/buttons.scss'
import { push } from 'react-router-redux'
import UserForm from '../../components/UserForm'
import update from 'react-addons-update'
import UserManipulator from '../UserManipulator'
import { createUser } from '../../actions/UserActions'

class UserCreator extends UserManipulator {

  render() {
    const { errorText, user } = this.state

    return <div>
      <UserForm user={user} errorText={errorText} updateField={this.updateField} />
      <RaisedButton label='Create' onTouchTap={this.createUser} linkButton={true} primary={true} disabled={this.isInvalid()} icon={<Ok />} className={styles.btn}/>
      <RaisedButton label='back' onTouchTap={() => { this.props.dispatch(push('/')) }} linkButton={true} icon={<Back />} className={styles.btn}/>
    </div>
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch  : dispatch,
    createUser: bindActionCreators(createUser, dispatch)
  }
}

export default connect(undefined, mapDispatchToProps)(UserCreator)
