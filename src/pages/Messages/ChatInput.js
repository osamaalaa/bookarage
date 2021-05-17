import React, { Component } from 'react'
import PropTypes from 'prop-types'
import attachIcon from "../../assets/images/attach-ic.svg"
class ChatInput extends Component {
  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired,
  }
  state = {
    message: '',
  }

  render() {
    return (
      <form
        action="."
        onSubmit={e => {
          e.preventDefault()
          this.props.onSubmitMessage(this.state.message)
          this.setState({ message: '' })
        }}
      >
           <div className="actions w-100 d-flex align-items-center justify-content-between">
                             <input
                                type="text"
                                placeholder={'Type your message'}
                                value={this.state.message}
                                className="form-control"
                                onChange={e => this.setState({ message: e.target.value })}
                              />
                      <div className="attach-file">
                      <img src={attachIcon} alt="attach" />
                      <input type="file" className="form-file" />
                    </div>
                    <button type="submit" value={'Send'} className="send-msg-btn">Send message</button>
                    </div>
      </form>
    )
  }
}

export default ChatInput