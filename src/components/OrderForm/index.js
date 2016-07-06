import React from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

export default class OrderForm extends React.Component {
  static propTypes = {
    customer    : React.PropTypes.object.isRequired,
    updateField : React.PropTypes.func.isRequired,
    errorText   : React.PropTypes.object.isRequired,
    cart        : React.PropTypes.array.isRequired
  }

  static errorMessages = {
    name        : 'Must be not empty.',
    email       : 'Must be valid email address.',
    address     : 'Must be not empty.',
    pay_type    : 'Must have valid value.'
  }

  updateField = (event) => {
    this.props.updateField( event.target.name, event.target.value )
  }

  handleChange = (event) => {
    console.log(event.target)
    console.log(event.target.name)
    console.log(event.target.value)
  }



  render() {
    const { customer, errorText } = this.props
    let total = 0

    return <div>
      <List>
        {
          cart.map((product) => {
            total += product.price*product.amount
            return <ListItem primaryText={product.title} secondaryText={'price: ' + product.price*product.amount + '$'} />
          })
        }
        <ListItem primaryText={'Total: ' + total + '$'} />
      </List>

      <TextField
        name='name'
        floatingLabelText="Name"
        value={customer.name}
        onChange={this.updateField}
        errorText={customer.name}
      /><br />
      <TextField
        name='email'
        floatingLabelText="Email"
        value={customer.email}
        onChange={this.updateField}
        errorText={errorText.email}
      /><br />
      <TextField
        name='address'
        floatingLabelText="Address"
        value={customer.address}
        multiLine={true}
        onChange={this.updateField}
        errorText={errorText.address}
      /><br />
      <SelectField value={customer.pay_type} onChange={this.handleChange}>
        <MenuItem value={'Credit card'} primaryText='Credit card' />
        <MenuItem value={'Check'} primaryText="Check" />
        <MenuItem value={'Purchase order'} primaryText="Purchase order" />
      </SelectField>
      <br />
      <TextField
        name='comment'
        floatingLabelText="Comment (not required field)"
        multiLine={true}
        value={customer.comment}
        onChange={this.updateField}
      /><br />
    </div>
  }
}
