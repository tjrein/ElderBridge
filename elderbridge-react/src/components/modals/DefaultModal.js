import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react'


class DefaultModal extends Component {

  handleConfirm = () => this.props.confirm();
  handleCancel = () => this.props.cancel();

  render() {
    const actions = {
      "month": [
        { key: 'cancel', content: 'Cancel appointment', icon: "cancel",labelPosition:'left', size: "large", negative: true, onClick: this.handleCancel },
        { key: 'done', content: 'Done', primary: true, onClick: this.handleConfirm, size: "large"}
      ],
      "week":[
        { key: 'cancel', content: "Cancel", onClick: this.handleCancel, size: "large"},
        { key: 'confrm', content: "Confirm appointment", onClick: this.handleConfirm, size: "large", positive: true, icon: "checkmark", labelPosition: "left"}
      ]
    }[this.props.view];

    const inlineStyle = {
      modal : {
        marginTop: '0px !important',
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    };

    return (
      <Modal
        open={this.props.open}
        header={this.props.header}
        content={this.props.content}
        actions={actions}
        style={inlineStyle.modal}
        size="large"
      />
    )
  }
}
export default DefaultModal
