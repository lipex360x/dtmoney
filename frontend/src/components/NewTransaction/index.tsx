import * as S from './styles'
import Modal from 'react-modal'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

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
    <S.Container>
      <h2>New Transaction</h2>

      <input
        type="text"
        placeholder='Name'
      />

      <input
        type="text"
        placeholder='value'
      />

      <S.TypeButtons>

        <S.Button>
          <img src={incomeImg} alt="Income" />
          <span>Income</span>
        </S.Button>

        <S.Button>
          <img src={outcomeImg} alt="Outcome" />
          <span>Outcome</span>
        </S.Button>

      </S.TypeButtons>

      <input
        type="text"
        placeholder='category'
      />

      <button type='submit'>Save Transaction</button>

    </S.Container>
    </Modal>
  )
}
