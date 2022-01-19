/* eslint-disable react/react-in-jsx-scope */
import { Header } from './components/Header'
import { Summary } from './components/Summary'
import { Transactions } from './components/Transactions'
import { GlobalStyle } from './styles/global'

function App () {
  return (
    <>
      <Header />
      <Summary />
      <Transactions />
      <GlobalStyle />
    </>
  )
}

export default App
