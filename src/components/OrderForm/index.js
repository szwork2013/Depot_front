import React from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'

export default class OrderForm extends React.Component {
  static propTypes = {
    customer    : React.PropTypes.object.isRequired,
    updateField : React.PropTypes.func.isRequired,
    errorText   : React.PropTypes.object.isRequired,
    cart        : React.PropTypes.array.isRequired
  }

  updateField = (event) => {
    this.props.updateField( event.target.name, event.target.value )
  }

  updatePayType = (event, index, value) => {
    this.props.updateField( 'pay_type', value )
  }



  render() {
    const { customer, errorText, cart } = this.props
    let total = 0

    return <div>
      <div style={{border: '1px solid rgb(224, 224, 224)', width: '350px', borderRadius: '5px 50px' }}>
        <List>
          <Subheader>Your order</Subheader>
          {
            cart.map((product, index) => {
              total += product.price*product.amount
              return <ListItem key={index} primaryText={product.title}
                               secondaryText={'price: ' + product.price*product.amount + '$'} disabled={true} />
            })
          }
          <Divider />
          <ListItem primaryText={'Total: ' + total + '$'} disabled={true} />
        </List>
      </div>

      <TextField
        name='name'
        floatingLabelText="Name"
        value={customer.name}
        onChange={this.updateField}
        errorText={errorText.name}
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
      <SelectField value={customer.pay_type} onChange={this.updatePayType} floatingLabelText='Pay type'>
        <MenuItem value={'Credit card'} primaryText='Credit card' />
        <MenuItem value={'Check'} primaryText="Check" />
        <MenuItem value={'Purchase order'} primaryText="Purchase order" />
      </SelectField>
      <br />
      <TextField
        name='comment'
        floatingLabelText="Comment (not required)"
        multiLine={true}
        value={customer.comment}
        onChange={this.updateField}
      /><br />
    </div>
  }
}
