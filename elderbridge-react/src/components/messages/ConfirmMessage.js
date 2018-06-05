import React, {Component} from 'react'
import { Message } from 'semantic-ui-react'

class ConfirmMessage extends Component {

  state = { visible: true }

  handleDismiss = () => {
    this.setState({ visible: false })

  setTimeout(() => {
    this.setState({ visible: true })
  }, 2000)
}

  render() {
      return(
        <Message positive
          size="massive"
          visible={this.state.visible}
          hidden={!this.state.visible}
          onDismiss={this.handleDismiss}
          header='Welcome back!'
          content='This is a special notification which you can dismiss.'
        />
      )
  }
}

export default ConfirmMessage
