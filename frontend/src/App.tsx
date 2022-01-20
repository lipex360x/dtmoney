/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import Modal from 'react-modal'
import { Header } from './components/Header'
import { NewTransaction } from './components/NewTransaction'
import { Summary } from './components/Summary'
import { Transactions } from './components/Transactions'
import { TransactionsProvider } from './hooks/useTransactions'
import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

function App () {
  const [modalTransactionOpen, setModalTransactionOpen] = useState(false)

  function handleOpenModal () {
    setModalTransactionOpen(true)
  }

  function handleCloseModal () {
    setModalTransactionOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header openModal={handleOpenModal}/>
      <Summary />
      <Transactions />
      <NewTransaction
        isOpen={modalTransactionOpen}
        onRequestClose={handleCloseModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  )
}

export default App
