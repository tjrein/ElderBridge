import React, {Component} from 'react'
import { Message } from 'semantic-ui-react'

class WarningMessage extends Component {

  constructor(props) {
    super(props);

    if (this.props.selfDestruct) {
      setTimeout(() => {
        this.props.callback()
      }, 4000);
    }
  }

  handleDismiss = () => this.props.callback();

  render() {
      return(
        <Message
          className={this.props.className}
          list={this.props.list}
          size="massive"
          onDismiss={this.handleDismiss}
          header={this.props.header}
          content={this.props.content}
        />
      )
  }
}

export default WarningMessage
