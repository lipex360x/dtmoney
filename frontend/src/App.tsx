/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import { Header } from './components/Header'
import { NewTransaction } from './components/NewTransaction'
import { Summary } from './components/Summary'
import { Transactions } from './components/Transactions'
import { GlobalStyle } from './styles/global'

function App () {
  const [modalTransactionOpen, setModalTransactionOpen] = useState(false)

  function handleOpenModal () {
    setModalTransactionOpen(true)
  }

  function handleCloseModal () {
    setModalTransactionOpen(false)
  }

  return (
    <>
      <Header openModal={handleOpenModal}/>
      <Summary />
      <Transactions />
      <NewTransaction
        isOpen={modalTransactionOpen}
        onRequestClose={handleCloseModal}
      />
      <GlobalStyle />
    </>
  )
}

export default App
