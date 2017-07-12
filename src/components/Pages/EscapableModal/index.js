import React from 'react'

import Button from 'components/Button'
import Modal from 'components/Modal'
import NavBar from 'components/NavBar'

class EscapableModal extends React.Component {

  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      anotherModalIsOpen: false,
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <Button label="I want modal" onClick={() => this.setState({modalIsOpen: true})} />
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel=""
          style={{padding: "60px"}}
          onRequestHide={() => this.setState({modalIsOpen: false})}
        >
          <h1>This is Modal 1!</h1>
          <Button label="I want more" onClick={() => this.setState({anotherModalIsOpen: true})} />
          <Modal
            isOpen={this.state.anotherModalIsOpen}
            contentLabel=""
            style={{padding: "20px"}}
            onRequestHide={() => this.setState({anotherModalIsOpen: false})}
          >
            <h1>Sure, here is more</h1>
          </Modal>
        </Modal>
      </div>
    )
  }
}

export default EscapableModal;