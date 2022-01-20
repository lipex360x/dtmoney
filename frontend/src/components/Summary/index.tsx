import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions'
import { numberToReal } from '../../shared/utils/numberTransform'

import * as S from './styles'

export function Summary () {
  const { providerData } = useTransactions()

  const summary = providerData.reduce((acc, transaction) => {
    const amount = transaction.amount

    switch (transaction.type) {
      case 'deposit':
        acc.deposit += amount
        acc.total += amount
        break
      case 'withdraw':
        acc.withdraw += amount
        acc.total -= amount
        break
      default:
        acc.deposit = 0
        acc.withdraw = 0
        acc.total = 0
    }

    return acc
  }, {
    deposit: 0,
    withdraw: 0,
    total: 0
  })

  return (
    <S.Container>

      <div>
        <header>
          <span>Income</span>
          <img src={incomeImg} alt="income img" />
        </header>
        <h2>{numberToReal(summary.deposit)}</h2>
      </div>

      <div>
        <header>
          <span>Outcome</span>
          <img src={outcomeImg} alt="outcome img" />
        </header>
        <h2>-{numberToReal(summary.withdraw)}</h2>
      </div>

      <div className='total'>
        <header>
          <span>Total</span>
          <img src={totalImg} alt="total img" />
        </header>
        <h2>{numberToReal(summary.total)}</h2>
      </div>
    </S.Container>
  )
}
