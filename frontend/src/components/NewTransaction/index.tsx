// import * as S from './styles'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'

interface NewTransactionProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransaction ({ isOpen, onRequestClose }:NewTransactionProps) {
  return (
    <Modal
      className='modal-content'
      overlayClassName='modal-overlay'
      closeTimeoutMS={500}
      isOpen={isOpen}
    >
      <button className='btn-modal-close' onClick={onRequestClose}>
        <img src={closeImg} alt="" />
      </button>
    </Modal>
  )
}
