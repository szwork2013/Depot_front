import React from 'react'
import TextField from 'material-ui/TextField'
import Subheader from 'material-ui/Subheader'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

export default class UserForm extends React.Component {
  static propTypes = {
    user        : React.PropTypes.object.isRequired,
    updateField : React.PropTypes.func.isRequired,
    errorText   : React.PropTypes.object.isRequired
  }

  updateField = (event) => {
    this.props.updateField( event.target.name, event.target.value )
  }

  updateRole = (event, index, value) => {
    this.props.updateField( 'role', value )
  }

  render() {
    const { user, errorText} = this.props

    return <div>
      <Subheader>Registration Form</Subheader>
      <TextField
        name='login'
        floatingLabelText='Login'
        value={user.name}
        onChange={this.updateField}
        errorText={errorText.login}
      /><br />
      <TextField
        name='email'
        floatingLabelText='Email'
        value={user.email}
        onChange={this.updateField}
        errorText={errorText.email}
      /><br />
      <TextField
        name='password'
        type='password'
        floatingLabelText='Password'
        value={user.password}
        onChange={this.updateField}
        errorText={errorText.password}
      /><br />
      <SelectField value={user.role} onChange={this.updateRole} floatingLabelText='Role'>
        <MenuItem value={'Purchaser'} primaryText='Purchaser' />
        <MenuItem value={'Vendor'} primaryText='Vendor' />
      </SelectField><br />
      <TextField
        name='address'
        floatingLabelText='Address (not required)'
        value={user.address}
        multiLine={true}
        onChange={this.updateField}
        errorText={errorText.address}
      /><br />
      <TextField
        name='name'
        floatingLabelText='Name (not required)'
        value={user.name}
        onChange={this.updateField}
      /><br />
    </div>
  }
}
