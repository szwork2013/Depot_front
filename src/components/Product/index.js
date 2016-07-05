import React from 'react'
import TextField from 'material-ui/TextField'

export default class Product extends React.Component {
  static propTypes = {
    product     : React.PropTypes.object.isRequired,
    updateField : React.PropTypes.func.isRequired,
    errorText   : React.PropTypes.object.isRequired
  }

  updateField = (event) => {
    this.props.updateField( event.target.name, event.target.value )
  }



  render() {
    const { product, errorText } = this.props

    return <div>
      <TextField
        name='title'
        floatingLabelText="Title"
        floatingLabelFixed={true}
        value={product.title}
        onChange={this.updateField}
        errorText={errorText.title}
      /><br />
      <TextField
        name='description'
        floatingLabelText="Description"
        multiLine={true}
        floatingLabelFixed={true}
        value={product.description}
        onChange={this.updateField}
        errorText={errorText.description}
      /><br />
      <TextField
        name='price'
        floatingLabelText="Price"
        floatingLabelFixed={true}
        value={product.price}
        onChange={this.updateField}
        errorText={errorText.price}
      /><br />
      <TextField
        name='image_url'
        floatingLabelText="Image Url"
        multiLine={true}
        floatingLabelFixed={true}
        value={product.image_url}
        onChange={this.updateField}
        errorText={errorText.image_url}
      /><br />
    </div>
  }
}
