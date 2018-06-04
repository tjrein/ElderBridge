import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'


class ModalExampleShorthand extends Component {

  handleConfirm = (e, data) => {
    this.props.confirm(true);
  }

  handleCancel = (e, data) => {
    this.props.cancel(false);
  }

  render() {
    const actions = {
      "month": [
        { key: 'cancel', content: 'Cancel appointment', icon: "cancel",labelPosition:'left', size: "large", negative: true, onClick: this.handleCancel },
        { key: 'done', content: 'Done', primary: true, onClick: this.handleConfirm, size: "large"}
      ],
      "week":[
        { key: 'cancel', content: "Cancel", onClick: this.handleCancel, size: "large"},
        { key: 'confrm', content: "Confirm appointment", onClick: this.handleConfirm, size: "large", positive: true}
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
        header='Reminder!'
        content='Call Benjamin regarding the reports.'
        actions={actions}
        style={inlineStyle.modal}
      />
    )
  }
}
export default ModalExampleShorthand
