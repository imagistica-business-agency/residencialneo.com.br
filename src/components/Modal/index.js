import React, { Component } from 'react'

import Contato from '../Contato'

import * as S from './styled'
import Close from '../../images/close.svg'

class ModalContact extends Component {
  state = { show: false }

  showModal = () => {
    this.setState({ show: true })
  }

  hideModal = () => {
    this.setState({ show: false })
  }

  render() {
    return (
      <S.Main>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <Contato />
        </Modal>
        <S.Button
          type="button"
          onClick={this.showModal}
          className={this.props.color}
        >
          {this.props.ButtonText}
        </S.Button>
      </S.Main>
    )
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div
          onClick={handleClose}
          onKeyDown={handleClose}
          role="button"
          tabIndex={0}
        >
          <S.CloseButton src={Close} />
        </div>
        {children}
      </section>
    </div>
  )
}

export default ModalContact
