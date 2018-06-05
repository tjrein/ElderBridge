import React, {Component} from 'react'
import { Message } from 'semantic-ui-react'

class DashboardMessage extends Component {
  handleDismiss = () => {
    this.props.history.push({ state: {messageVisible: false} });
  }

  render() {
    return(
      <Message
        positive={this.props.positive}
        negative={!this.props.positive}
        size="massive"
        onDismiss={this.handleDismiss}
        header={this.props.header}
        content={this.props.content}
      />
    )
  }
}

export default DashboardMessage
