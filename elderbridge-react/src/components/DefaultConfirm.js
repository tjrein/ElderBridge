import React, { Component } from 'react'
import { Confirm } from 'semantic-ui-react'

class ConfirmExampleSize extends Component {

  handleConfirm = () => {
    this.props.callback(true);
  }

  handleCancel = () => {
    this.props.callback(false);
  }

  render() {
    const inlineStyle = {
      modal : {
        marginTop: '0px !important',
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    };

    return (
      <div>
        <Confirm
          header='Schedule appointment for the following date?'
          open={this.props.open}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
          content={this.props.content}
          size='large'
          style={inlineStyle.modal}
        />
      </div>
    )
  }
}

export default ConfirmExampleSize
