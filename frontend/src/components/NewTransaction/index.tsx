import * as S from './styles'
import Modal from 'react-modal'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react'

interface NewTransactionProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransaction ({ isOpen, onRequestClose }:NewTransactionProps) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState('deposit')
  const [category, setCategory] = useState('')

  async function handleCreateTransaction (event: FormEvent) {
    event.preventDefault()

    handleCloseModal()
  }

  function handleCloseModal () {
    setTitle('')
    setAmount(0)
    setType('deposit')
    setCategory('')

    onRequestClose()
  }

  return (
    <Modal
      className='modal-content'
      overlayClassName='modal-overlay'
      closeTimeoutMS={200}
      isOpen={isOpen}
    >
      <button className='btn-modal-close' onClick={handleCloseModal}>
        <img src={closeImg} alt="" />
      </button>

    <S.Container onSubmit={handleCreateTransaction}>
      <h2>New Transaction</h2>

      <input
        type="text"
        placeholder='Name'
        value={title}
        onChange={event => setTitle(event.target.value)}
      />

      <input
        type="number"
        placeholder='value'
        step='0.01'
        value={amount}
        onChange={event => setAmount(Number(event.target.value))}
      />

      <S.TypeButtons>

        <S.Button
          type='button'
          isActive={type === 'deposit'}
          activeColor='green'
          onClick={() => { setType('deposit') }}
        >
          <img src={incomeImg} alt="Income" />
          <span>Income</span>
        </S.Button>

        <S.Button
          type='button'
          isActive={type === 'withdraw'}
          activeColor='red'
          onClick={() => { setType('withdraw') }}
        >
          <img src={outcomeImg} alt="Outcome" />
          <span>Outcome</span>
        </S.Button>

      </S.TypeButtons>

      <input
        type="text"
        placeholder='category'
        value={category}
        onChange={event => setCategory(event.target.value)}
      />

      <button type='submit'>Save Transaction</button>

    </S.Container>
    </Modal>
  )
}
