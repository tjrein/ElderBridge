import React, {Component} from 'react'
import { Message } from 'semantic-ui-react'

class WarningMessage extends Component {

  constructor(props) {
    super(props);

    setTimeout(() => {
      this.props.callback()
    }, 3000);
  }

  render() {
      return(
        <Message warning
          size="massive"
          header="Appointment has already passed"
          content="Please schedule an appointment for a time in the future."
        />
      )
  }
}

export default WarningMessage
